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
                .AddQuestionFollowerAsync(qf);
            await _unitOfWork.SaveAsync();
        }


        Task IQuestionFollowerManager.UnfollowAsync(
            ApplicationUser user, int questionid)
        {
            throw new NotImplementedException();
        }
    }
}
