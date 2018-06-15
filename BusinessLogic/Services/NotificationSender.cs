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
        #region private fields
        private static ConcurrentDictionary<int, List<WebSocket>> _websockets
            = new ConcurrentDictionary<int, List<WebSocket>>();
        private static BlockingCollection<Notification> _notificationRequests
            = new BlockingCollection<Notification>();
        #endregion

        public NotificationSender()
        {
            new Thread(new ThreadStart(NotificationSenderThread)).Start();
        }

        async public static void NotificationSenderThread()
        {
            while (!_notificationRequests.IsCompleted)
            {

                Notification req = null;
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
        void INotificationSender.Subscribe(int userId, WebSocket webSocket)
        {
            if (!_websockets.ContainsKey(userId))
                _websockets[userId] = new List<WebSocket>();

            _websockets[userId].Add(webSocket);
        }

        void INotificationSender.Unsubscribe(int userId, WebSocket webSocket)
        {
            Unsubscribe(userId, webSocket);
        }

        void INotificationSender.EnqueueSendRequest(Notification notification)
        {
            _notificationRequests.Add(
                notification
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
            Notification request)
        {
            var data = ToJson(request);
            var encoded = Encoding.UTF8.GetBytes(data);
            var buffer = new ArraySegment<Byte>(
                encoded, 0, encoded.Length);

            var userId = request.UserId;

            if(_websockets.ContainsKey(userId))
            {
                var closedWebSockets = new List<WebSocket>();

                foreach(var ws in _websockets[userId])
                {
                    if (ws.State.Equals(WebSocketState.Open))
                    {
                        try
                        {
                            await ws.SendAsync(
                            buffer, WebSocketMessageType.Text,
                            true,
                            CancellationToken.None);
                        }
                        catch (Exception _e)
                        {
                            closedWebSockets.Add(ws);
                        }
                    }
                    else
                    {
                        closedWebSockets.Add(ws);
                    }
                }

                closedWebSockets.ForEach( ws => { Unsubscribe(userId, ws); });
            }
            
        }

        static void Unsubscribe(int userId, WebSocket webSocket)
        {
            if (_websockets.ContainsKey(userId))
            {
                if (_websockets[userId].Contains(webSocket))
                {
                    _websockets[userId].Remove(webSocket);
                    if (!_websockets[userId].Any())
                    {
                        _websockets.TryRemove(userId, out List<WebSocket> value);
                    }
                }
            }
        }

        
    }
}
