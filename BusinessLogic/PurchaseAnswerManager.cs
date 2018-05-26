using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using ProjectQ.DAL;
using ProjectQ.Model;
using ProjectQ.BusinessLogic.Services;

namespace ProjectQ.BusinessLogic
{
    public class PurchaseAnswerManager : IPurchaseAnswerManager
    {
        #region Fields
        private IUnitOfWork _unitOfWork;
        private INotificationSender _notificationSender;
        #endregion

        #region Cosntructors

        public PurchaseAnswerManager(
            IUnitOfWork unitOfWork,
            INotificationSender notificationSender)
        {
            _unitOfWork = unitOfWork;
            _notificationSender = notificationSender;
        }

        #endregion

        #region Interface Implementations

        async Task<IEnumerable<PurchasedAnswer>> IPurchaseAnswerManager.GetForUserAsync(int userId)
        {
            return await _unitOfWork.PurchasedAnswerRepository.GetForUserAsync(userId);
        }


        async Task<int> IPurchaseAnswerManager.PurchaseAsync(int answerId, int userId, decimal price)
        {
            var answer = await _unitOfWork.AnswerRepository.FindAsync(answerId);

            var question = await 
                _unitOfWork
                .QuestionRepository.FindAsync(answer.QuestionId);

            var user = await _unitOfWork.UserRepository.FindAsync(userId);

            var now = DateTime.UtcNow;
            var protectedContent = await _unitOfWork.AnswerRepository.FindProtectedAsync(answerId);

            var purchasedAnswer = new PurchasedAnswer()
            {
                AnswerId = answer.Id,
                UserId = user.Id,
                PurchaseDate = now,
                HtmlContent = protectedContent.HtmlContent
            };

            await _unitOfWork.PurchasedAnswerRepository.AddAsync(purchasedAnswer);


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
                            user.Name + " purchased an answer witten by XYZ to the question:  \""
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
       
        #endregion
    }
}
