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

        async Task<int> IAnswerManager.AddAsync(Answer answer, int userId)
        {
            if (!_unitOfWork.QuestionRepository
                .QuestionExists(answer.QuestionId))
                throw new Exception("Question does not exist.");

            var question = await 
                _unitOfWork
                .QuestionRepository.FindAsync(answer.QuestionId);

            var user = await _unitOfWork.UserRepository.FindAsync(userId);

            answer.UserId = userId;
            answer.OriginDate = DateTime.UtcNow;

            await _unitOfWork.AnswerRepository.AddAsync(answer);

            var followers =
                _unitOfWork.QuestionFollowerRepository
                .GetFollowersForQuestion(question.Id);

            followers.Add(question.UserId);

            var notificationLength = question.Title.Length > 26 ? 25 : question.Title.Length;

            var notifications = new List<Notification>();

            foreach(var follower in followers)
            {
                var notification =
                    new Notification()
                    {
                        IsSeen = false,
                        OriginDate = answer.OriginDate,
                        UserId = follower,

                        EventDescription =
                            user.Name + " wrote an answer for \""
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

        async Task IAnswerManager.UpdateAsync(int userId, Answer answer)
        {
            var dbRecord = await _unitOfWork.AnswerRepository.FindAsync(answer.Id);
            if (dbRecord.UserId != userId)
            {
                throw new Exception("Unauthorized");
            }

            await _unitOfWork.AnswerRepository
                .UpdateAsync(answer);
            await _unitOfWork.SaveAsync();
        }

        async Task<IEnumerable<UserSpecificAnswerView>> 
            IAnswerManager.GetForQuestionAndUserAsync(
            int questionId, int userId)
        {
            return await _unitOfWork
                .AnswerRepository
                .GetForQuestionAndUserAsync(questionId, userId);
        }

        Task<Answer> IAnswerManager.FindAsync(int id)
        {
            return _unitOfWork.AnswerRepository.FindAsync(id);
        }

        bool IAnswerManager.AnswerExists(int id)
        {
            return _unitOfWork.AnswerRepository.AnswerExists(id);
        }

        #endregion
    }
}
