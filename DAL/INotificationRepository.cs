using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface INotificationRepository
    {
        Task<Notification> GetByIdAsync(int id); 
        Task AddAsync(Notification notification);
        Task UpdateAsync(Notification notification);
        Task<IEnumerable<Notification>> GetUnseenForUserAsyc(string userId);
    }
}
