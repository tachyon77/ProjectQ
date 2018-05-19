using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework
{
    public class AnswerRepository : IAnswerRepository
    {
        #region Fields
        private readonly ProjectQEntities _context;
        #endregion

        #region Constructors

        public AnswerRepository(ProjectQEntities context)
        {
            _context = context;
        }
        #endregion

        #region Interface Implementations
        async Task IAnswerRepository.AddAsync(Answer answer)
        {
            await _context.Answers.AddAsync(answer);
        }

        bool IAnswerRepository.AnswerExists(int id)
        {
            throw new NotImplementedException();
        }

        async Task<IEnumerable<UserSpecificAnswerView>> 
            IAnswerRepository.GetViewForQuestionAndUserAsync(
            int questionId,
            int userId)
        {
            var answers = await
                _context.Answers
                .Include(a=>a.User)
                .Include(a=>a.AnswerRatings)
                .Where(a => a.QuestionId.Equals(questionId)).
                ToListAsync();

            var userSpecificAnswerViews = answers
                .ToList()
                .ConvertAll(
                    a=> new UserSpecificAnswerView()
                    {
                        Answer = a,
                        Rating = a.AnswerRatings.FirstOrDefault(x=>x.UserId.Equals(a.UserId)),
                        AverageRating = a.AnswerRatings.Any() ?
                            Convert.ToDecimal(a.AnswerRatings.Average(r => r.Rating))
                            :
                            0
                    }
                );
            return userSpecificAnswerViews;
        }

        async public Task<Answer> FindAsync(int id)
        {
            return await _context.Answers.Include(x=>x.User)
                .FirstOrDefaultAsync(x=>x.Id.Equals(id));
        }

        async Task IAnswerRepository.UpdateAsync(Answer answer)
        {
            var dbRecord = await FindAnswerIncludeProtectedAsync(answer.Id);

            dbRecord.ProtectedAnswerContent.HtmlContent = answer.ProtectedAnswerContent.HtmlContent;
            dbRecord.RedactedHtmlContent = answer.RedactedHtmlContent;
            dbRecord.IsProtected = answer.IsProtected;
            dbRecord.ExpiryDate = answer.ExpiryDate;
        }


        async public Task DeleteAsync(int answerId)
        {
            Answer dbRecord = await FindAsync(answerId);
            _context.Answers.Remove(dbRecord);
        }

        async Task<ProtectedAnswerContent> IAnswerRepository.FindProtectedAsync(int id)
        {
            return (await FindAnswerIncludeProtectedAsync(id))
                .ProtectedAnswerContent;
        }

        #endregion

        #region Private methods
        async Task<Answer> FindAnswerIncludeProtectedAsync(int answerId)
        {
            return await _context.Answers
                .Include(x => x.ProtectedAnswerContent)
                .FirstOrDefaultAsync(x => x.Id.Equals(answerId));
        }

        #endregion
    }
}
