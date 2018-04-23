using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.DAL;
using ProjectQ.Model;
using ProjectQ.BusinessLogic.Services;

namespace ProjectQ.BusinessLogic
{
    public class AnswerManager : IAnswerManager
    {
        #region Private Members
        private IUnitOfWork _unitOfWork;
        private INotificationSender _notificationSender;
        #endregion

        #region Public Members

        public AnswerManager(
            IUnitOfWork unitOfWork,
            INotificationSender notificationSender)
        {
            _unitOfWork = unitOfWork;
            _notificationSender = notificationSender;
        }

        async Task<int> IAnswerManager.AddAsync(Answer answer, ApplicationUser user)
        {
            if (!_unitOfWork.QuestionRepository
                .QuestionExists(answer.QuestionId))
                throw new Exception("Question does not exist.");

            var question = await 
                _unitOfWork
                .QuestionRepository.GetByIdAsync(answer.QuestionId);

            answer.AspNetUserId = user.Id;
            answer.OriginDate = DateTime.UtcNow;

            await _unitOfWork.AnswerRepository.AddAsync(answer);

            var followers =
                _unitOfWork.QuestionFollowerRepository
                .GetFollowersForQuestion(question.Id);

            followers.Add(question.AspNetUserId);

            var notificationLength = question.Title.Length > 26 ? 25 : question.Title.Length;

            var notifications = new List<Notification>();

            foreach(var follower in followers)
            {
                var notification =
                    new Notification()
                    {
                        IsSeen = false,
                        OriginDate = answer.OriginDate,
                        AspNetUserId = follower,

                        EventDescription =
                            user.UserName + " wrote an answer for \""
                            + question.Title.Substring(0, notificationLength)
                            + " ...\"",
                        Link = "/question-detail/" + question.Id
                    };

                notifications.Add(notification);

                await _unitOfWork.NotificationRepository.AddAsync(notification);
            }

            await _unitOfWork.SaveAsync();

            notifications.ForEach( x=>_notificationSender.EnqueueSendRequest(x));

            return answer.Id;
        }

        async Task IAnswerManager.UpdateAsync(string userId, Answer answer)
        {
            var dbRecord = await _unitOfWork.AnswerRepository.GetByIdAsync(answer.Id);
            if (dbRecord.AspNetUserId != userId)
            {
                throw new Exception("Unauthorized");
            }

            await _unitOfWork.AnswerRepository
                .UpdateAsync(answer);
            await _unitOfWork.SaveAsync();
        }

        async Task<IEnumerable<UserSpecificAnswerView>> 
            IAnswerManager.GetForQuestionAndUserAsync(
            int questionId, string userId)
        {
            return await _unitOfWork
                .AnswerRepository
                .GetForQuestionAndUserAsync(questionId, userId);
        }

        Task<Answer> IAnswerManager.GetById(int id)
        {
            return _unitOfWork.AnswerRepository.GetByIdAsync(id);
        }

        bool IAnswerManager.AnswerExists(int id)
        {
            return _unitOfWork.AnswerRepository.AnswerExists(id);
        }

        #endregion
    }
}
