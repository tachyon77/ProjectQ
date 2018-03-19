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
            ApplicationUser user, int questionId)
        {
            var qf = new QuestionFollower()
            {
                AspNetUserId = user.Id,
                IsFollowing = true,
                OriginDate = DateTime.UtcNow,
                QuestionId = questionId, 
            };

            await _unitOfWork.QuestionFollowerRepository
                .AddFollowerAsync(qf);
            await _unitOfWork.SaveAsync();
        }


        async Task IQuestionFollowerManager.UnfollowAsync(
            ApplicationUser user, int questionid)
        {
            await _unitOfWork.QuestionFollowerRepository
                .RemoveFollowerAsync(questionid, user);
            await _unitOfWork.SaveAsync();
        }
    }
}
