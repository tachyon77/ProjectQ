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
            string userId)
        {
            return await _unitOfWork.NotificationRepository
                .GetUnseenForUserAsyc(userId);
        }

        Task INotificationManager.UpdateAsync(Notification notification)
        {
            throw new NotImplementedException();
        }


        #endregion
    }
}