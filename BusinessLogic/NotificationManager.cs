﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using ProjectQ.DAL;

namespace ProjectQ.BusinessLogic
{
   
    public class NotificationManager : INotificationManager
    {
        #region Private Members
        private IUnitOfWork _unitOfWork;
        #endregion

        #region Public Members

        public NotificationManager(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        async Task<IEnumerable<Notification>> INotificationManager.GetForUserAsync(
            int userId)
        {
            return await _unitOfWork.NotificationRepository
                .GetUnseenForUserAsyc(userId);
        }

        async Task INotificationManager.MarkSeenAsync(int id)
        {
            var notification = await _unitOfWork
                .NotificationRepository.FindAsync(id);
            notification.IsSeen = true;

            await _unitOfWork.SaveAsync();
        }

        async Task INotificationManager.MarkAllSeenAsync(int userId)
        {
            var notifications = await _unitOfWork.NotificationRepository.GetUnseenForUserAsyc(userId);

            notifications.ToList().ForEach( n=> { n.IsSeen = true; } );

            await _unitOfWork.SaveAsync();
        }


        #endregion
    }
}
