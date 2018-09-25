
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using Microsoft.EntityFrameworkCore;

namespace ProjectQ.DAL.EntityFramework
{
    public class QuestionFollowerRepository : IQuestionFollowerRepository
    {
        #region Private Members
        private ProjectQEntities _context;
        #endregion

        public QuestionFollowerRepository(ProjectQEntities context)
        {
            _context = context;
        }

        async Task IQuestionFollowerRepository.AddFollowerAsync(
            QuestionFollower questionFollower)
        {
            var existingRecord = await _context.QuestionFollowers
                .FirstOrDefaultAsync(
                    x=>x.QuestionId== questionFollower.QuestionId
                    && 
                    x.UserId == questionFollower.UserId);

            if (existingRecord == null)
            {
                questionFollower.OriginDate = DateTime.UtcNow;
                await _context.QuestionFollowers.AddAsync(questionFollower);
            }
            else
            {
                existingRecord.IsFollowing = true;
            }            
        }

        IEnumerable<User> IQuestionFollowerRepository
            .GetFollowersForQuestion(int questionId)
        {

			var followers = from follower in _context.QuestionFollowers
							join user in _context.Users on follower.UserId equals user.Id
							where follower.IsFollowing && follower.QuestionId == questionId
							select user;

            return followers.Distinct();
        }

        async Task IQuestionFollowerRepository.RemoveFollowerAsync(
            int questionId, int userId)
        {
            var existingRecord = await _context.QuestionFollowers
               .FirstOrDefaultAsync(
                   x => x.QuestionId == questionId
                   &&
                   x.UserId == userId);

            existingRecord.IsFollowing = false;           
        }
    }
}
