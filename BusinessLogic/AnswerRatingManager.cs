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
            AnswerRating answerRating, int userId)
        {
            var existingRating = await _unitOfWork
                .AnswerRatingRepository
                .GetByAnswerAndUserAsync(answerRating.AnswerId, userId);

            if (existingRating != null)
            {
                answerRating.Id = existingRating.Id;
                answerRating.OriginDate = existingRating.OriginDate;
                await _unitOfWork.AnswerRatingRepository.UpdateAsync(answerRating);
            }
            else
            {
                answerRating.UserId = userId;
                answerRating.OriginDate = DateTime.UtcNow;
                answerRating.LastUpdated = answerRating.OriginDate;

                await _unitOfWork.AnswerRatingRepository.AddAsync(answerRating);  
            }

            var answer = await _unitOfWork
                    .AnswerRepository.FindAsync(answerRating.AnswerId);

            var user = await _unitOfWork.UserRepository.FindAsync(userId);

            var notification =
                new Notification()
                {
                    IsSeen = false,
                    OriginDate = answerRating.OriginDate,
                    UserId = answer.UserId,

                    EventDescription =
                        user.Name + " rated your answer",
                    Link = "/question-detail/" + answer.QuestionId
                };

            await _unitOfWork.NotificationRepository.AddAsync(notification);

            await _unitOfWork.SaveAsync();

            _notificationSender.EnqueueSendRequest(notification);

            return answerRating.Id;
        }

        async Task<AnswerRating> IAnswerRatingManager.FindAsync(int id)
        {
            return await _unitOfWork.AnswerRatingRepository.FindAsync(id);
        }

        #endregion
    }
}
