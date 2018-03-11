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
        private ConcurrentDictionary<string, List<WebSocket>> _websockets
            = new ConcurrentDictionary<string, List<WebSocket>>();
        #endregion

        void INotificationSender.Subscribe(string userId, WebSocket webSocket)
        {
            if (!_websockets.ContainsKey(userId))
                _websockets[userId] = new List<WebSocket>();

            _websockets[userId].Add(webSocket);
        }

        private string ToJson(Notification notification)
        {
            var settings = new JsonSerializerSettings();
            settings.PreserveReferencesHandling = PreserveReferencesHandling.None;
            settings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            settings.Formatting = Formatting.Indented;

            // Do the serialization and output to the console
            string json = JsonConvert.SerializeObject(notification, settings);

            return json;
        }

        async Task INotificationSender.SendAsync(
            IEnumerable<string> userIds, 
            Notification notification)
        {
            var data = ToJson(notification);
            var encoded = Encoding.UTF8.GetBytes(data);
            var buffer = new ArraySegment<Byte>(
                encoded, 0, encoded.Length);

            foreach (var userId in userIds)
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
                            ((INotificationSender)this).Unsubscribe(userId, ws);
                        }
                    }
                }
            }
        }

        void INotificationSender.Unsubscribe(string userId, WebSocket webSocket)
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
