using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.WebSockets;
using ProjectQ.Model;
using Newtonsoft.Json;
using System.Text;
using System.Threading;

namespace ProjectQ.BusinessLogic.Services
{
    public class NotificationSender : INotificationSender
    {
        #region private fields
        private Dictionary<string, List<WebSocket>> _websockets
            = new Dictionary<string, List<WebSocket>>();
        #endregion

        void INotificationSender.Subscribe(string userId, WebSocket webSocket)
        {
            if (!_websockets.ContainsKey(userId))
                _websockets[userId] = new List<WebSocket>();

            _websockets[userId].Add(webSocket);
        }

        async Task INotificationSender.SendAsync(
            IEnumerable<string> userIds, 
            Notification notification)
        {
            foreach (var userId in userIds)
            {
                if(_websockets.ContainsKey(userId))
                {
                    foreach(var ws in _websockets[userId])
                    {
                        if (ws.State.Equals(WebSocketState.Open))
                        {
                            var data = JsonConvert.SerializeObject(notification);
                            var encoded = Encoding.UTF8.GetBytes(data);
                            var buffer = new ArraySegment<Byte>(
                                encoded, 0, encoded.Length);

                            await ws.SendAsync(
                                buffer, WebSocketMessageType.Text,
                                true,
                                CancellationToken.None);

                        }
                        else
                        {
                            _websockets[userId].Remove(ws);
                            if (!_websockets[userId].Any())
                                _websockets.Remove(userId);
                        }
                    }
                }
            }
        }
    }
}
