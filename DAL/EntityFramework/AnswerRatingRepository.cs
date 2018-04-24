using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework
{
    public class AnswerRatingRepository : IAnswerRatingRepository
    {
        #region Private Members
        private ProjectQEntities _context;
        #endregion

        public AnswerRatingRepository(ProjectQEntities context)
        {
            _context = context;
        }
        async Task IAnswerRatingRepository.AddAsync(AnswerRating answerRating)
        {
            await _context.AnswerRatings.AddAsync(answerRating);
        }

        async Task<AnswerRating> IAnswerRatingRepository.GetByAnswerAndUserAsync(
            int answerId, int userId)
        {
            return await _context.AnswerRatings.SingleOrDefaultAsync(
                x=>x.UserId.Equals(userId) &&
                x.AnswerId.Equals(answerId));
        }

        async Task<AnswerRating> IAnswerRatingRepository.FindAsync(int id)
        {
            return await _context.AnswerRatings.FindAsync(id);
        }

        async Task IAnswerRatingRepository.UpdateAsync(
            AnswerRating answerRating)
        {
            var dbRecord = await _context.AnswerRatings
                .FindAsync(answerRating.Id);

            dbRecord.Rating = answerRating.Rating;
            dbRecord.LastUpdated = DateTime.UtcNow;
            dbRecord.IsDeleted = answerRating.IsDeleted;
        }
    }
}
