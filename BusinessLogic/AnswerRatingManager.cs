using ProjectQ.BusinessLogic.Services;
using ProjectQ.DAL;
using ProjectQ.Model;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProjectQ.BusinessLogic
{
    public class AnswerRatingManager : IAnswerRatingManager
    {
        #region Private Members
        private IUnitOfWork _unitOfWork;
        private INotificationSender _notificationSender;
        #endregion

        #region Public Members

        public AnswerRatingManager(
            IUnitOfWork unitOfWork,
            INotificationSender notificationSender)
        {
            _unitOfWork = unitOfWork;
            _notificationSender = notificationSender;
        }

        async Task<int> IAnswerRatingManager.AddOrUpdateAsync(
            AnswerRating answerRating, string userId)
        {
            var existingRating = await _unitOfWork
                .AnswerRatingRepository
                .GetByAnswerAndUser(answerRating.AnswerId, userId);

            if (existingRating != null)
            {
                answerRating.Id = existingRating.Id;
                answerRating.OriginDate = existingRating.OriginDate;
                await _unitOfWork.AnswerRatingRepository.UpdateAsync(answerRating);
            }
            else
            {
                answerRating.AspNetUserId = userId;
                answerRating.OriginDate = DateTime.UtcNow;
                answerRating.LastUpdated = answerRating.OriginDate;

                await _unitOfWork.AnswerRatingRepository.AddAsync(answerRating);  
            }

            var answer = await _unitOfWork
                    .AnswerRepository.GetByIdAsync(answerRating.AnswerId);

            var notification =
                new Notification()
                {
                    IsSeen = false,
                    OriginDate = answerRating.OriginDate,
                    AspNetUserId = answer.AspNetUserId,

                    EventDescription =
                        "Someone rated your answer",
                    Link = "/question-detail/" + answer.QuestionId
                };

            await _unitOfWork.NotificationRepository.AddAsync(notification);

            await _unitOfWork.SaveAsync();

            _notificationSender.EnqueueSendRequest(
                new List<string>() { answer.AspNetUserId }, 
                notification);

            return answerRating.Id;
        }

        async Task<AnswerRating> IAnswerRatingManager.GetByIdAsync(int id)
        {
            return await _unitOfWork.AnswerRatingRepository.GetByIdAsync(id);
        }

        #endregion
    }
}
