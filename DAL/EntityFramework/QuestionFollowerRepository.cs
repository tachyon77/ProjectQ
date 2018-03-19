
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
                .SingleOrDefaultAsync(
                    x=>x.QuestionId== questionFollower.QuestionId
                    && 
                    x.AspNetUserId == questionFollower.AspNetUserId);

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

        async Task IQuestionFollowerRepository.RemoveFollowerAsync(
            int questionId, ApplicationUser follower)
        {
            var existingRecord = await _context.QuestionFollowers
               .SingleAsync(
                   x => x.QuestionId == questionId
                   &&
                   x.AspNetUserId == follower.Id);

            existingRecord.IsFollowing = false;           
        }
    }
}
