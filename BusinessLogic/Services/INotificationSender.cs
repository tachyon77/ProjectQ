using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjectQ.Model;
using System.Net.WebSockets;

namespace ProjectQ.BusinessLogic.Services
{
    public interface INotificationSender
    {
        void Unsubscribe(string userId, WebSocket webSocket);
        void Subscribe(string userId, WebSocket webSocket);
        void EnqueueSendRequest(
            IEnumerable<string> recipientUserIds, 
            Notification notification);
    }
}
