using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework
{
    public class NotificationRepository : INotificationRepository
    {
        #region Private Members
        private ProjectQEntities _context;
        #endregion

        public NotificationRepository(ProjectQEntities context)
        {
            _context = context;
        }

        async Task INotificationRepository.AddAsync(Notification notification)
        {
            await _context.Notifications.AddAsync(notification);
        }

        async Task<IEnumerable<Notification>> INotificationRepository.GetUnseenForUserAsyc(
            int userId)
        {
            return await _context.Notifications.Where(x => !x.IsSeen).ToListAsync();
        }

        async Task INotificationRepository.UpdateAsync(Notification notification)
        {
            var dbRecord = await _context.Notifications.FindAsync(notification.Id);

            dbRecord.EventDescription = notification.EventDescription;
            dbRecord.IsSeen = notification.IsSeen;
        }
    }
}
