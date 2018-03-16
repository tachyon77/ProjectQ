using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.WebSockets;
using ProjectQ.Model;
using Newtonsoft.Json;
using System.Text;
using System.Threading;
using System.Collections.Concurrent;

namespace ProjectQ.BusinessLogic.Services
{
    public class NotificationSender : INotificationSender
    {
        private class NotificationRequest
        {
            public IEnumerable<string> RecipientUserIds { get; set; }
            public Notification Notification { get; set; }
        }

        #region private fields
        private static ConcurrentDictionary<string, List<WebSocket>> _websockets
            = new ConcurrentDictionary<string, List<WebSocket>>();
        private static BlockingCollection<NotificationRequest> _notificationRequests
            = new BlockingCollection<NotificationRequest>();
        #endregion

        public NotificationSender()
        {
            new Thread(new ThreadStart(NotificationSenderThread)).Start();
        }

        async public static void NotificationSenderThread()
        {
            while (!_notificationRequests.IsCompleted)
            {

                NotificationRequest req = null;
                // Blocks if number.Count == 0
                // IOE means that Take() was called on a completed collection.
                // Some other thread can call CompleteAdding after we pass the
                // IsCompleted check but before we call Take. 
                // In this example, we can simply catch the exception since the 
                // loop will break on the next iteration.
                try
                {
                    req = _notificationRequests.Take();
                }
                catch (InvalidOperationException) { }

                if (req != null)
                {
                    await SendAsync(req);
                }
            }
        }

        #region Interface Implementation
        void INotificationSender.Subscribe(string userId, WebSocket webSocket)
        {
            if (!_websockets.ContainsKey(userId))
                _websockets[userId] = new List<WebSocket>();

            _websockets[userId].Add(webSocket);
        }

        void INotificationSender.Unsubscribe(string userId, WebSocket webSocket)
        {
            Unsubscribe(userId, webSocket);
        }

        void INotificationSender.EnqueueSendRequest
            (IEnumerable<string> recipientUserIds, Notification notification)
        {
            _notificationRequests.Add(
                new NotificationRequest()
                {
                    Notification = notification,
                    RecipientUserIds = recipientUserIds
                }
            );
        }
        #endregion

        static string ToJson(Notification notification)
        {
            var settings = new JsonSerializerSettings();
            settings.PreserveReferencesHandling = PreserveReferencesHandling.None;
            settings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            settings.Formatting = Formatting.Indented;

            // Do the serialization and output to the console
            string json = JsonConvert.SerializeObject(notification, settings);

            return json;
        }

        async static Task SendAsync(
            NotificationRequest request)
        {
            var data = ToJson(request.Notification);
            var encoded = Encoding.UTF8.GetBytes(data);
            var buffer = new ArraySegment<Byte>(
                encoded, 0, encoded.Length);

            foreach (var userId in request.RecipientUserIds)
            {
                if(_websockets.ContainsKey(userId))
                {
                    foreach(var ws in _websockets[userId])
                    {
                        if (ws.State.Equals(WebSocketState.Open))
                        {
                            await ws.SendAsync(
                                buffer, WebSocketMessageType.Text,
                                true,
                                CancellationToken.None);

                        }
                        else
                        {
                            Unsubscribe(userId, ws);
                        }
                    }
                }
            }
        }

        static void Unsubscribe(string userId, WebSocket webSocket)
        {
            if (_websockets.ContainsKey(userId))
            {
                if (_websockets[userId].Contains(webSocket))
                {
                    _websockets[userId].Remove(webSocket);
                    if (!_websockets[userId].Any())
                    {
                        List<WebSocket> value;
                        _websockets.TryRemove(userId, out value);
                    }
                }
            }
        }

        
    }
}
