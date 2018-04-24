using System;
using ProjectQ.Model;
using ProjectQ.DAL;
using System.Threading.Tasks;

namespace ProjectQ.BusinessLogic
{
    public class QuestionFollowerManager : IQuestionFollowerManager
    {
        #region Private Members
        private IUnitOfWork _unitOfWork;
        #endregion

        public QuestionFollowerManager(
            IUnitOfWork unitOfWork
        )
        {
            _unitOfWork = unitOfWork;
        }

        async Task IQuestionFollowerManager.FollowAsync(
            int userId, int questionId)
        {
            var qf = new QuestionFollower()
            {
                UserId = userId,
                IsFollowing = true,
                OriginDate = DateTime.UtcNow,
                QuestionId = questionId, 
            };

            await _unitOfWork.QuestionFollowerRepository
                .AddFollowerAsync(qf);
            await _unitOfWork.SaveAsync();
        }


        async Task IQuestionFollowerManager.UnfollowAsync(
            int userId, int questionid)
        {
            await _unitOfWork.QuestionFollowerRepository
                .RemoveFollowerAsync(questionid, userId);
            await _unitOfWork.SaveAsync();
        }
    }
}
