using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface INotificationManager
    { 
        Task MarkSeenAsync(int id);
        Task<IEnumerable<Notification>> GetForUserAsync(string userId);
    }
}
