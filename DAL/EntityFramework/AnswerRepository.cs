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
            IAnswerRepository.GetForQuestionAndUserAsync(
            int questionId,
            int userId)
        {
            var answers = await
                _context.Answers
                .Include(a=>a.User)
                .Include(a=>a.AnswerRatings)
                .Where
                (
                    a => !a.IsDeleted && a.QuestionId.Equals(questionId)
                ).ToListAsync();

            var userSpecificAnswerViews = answers
                .ToList()
                .ConvertAll(
                    a=> new UserSpecificAnswerView()
                    {
                        Answer = a,
                        Rating = a.AnswerRatings.SingleOrDefault(x=>x.UserId.Equals(a.UserId))
                    }
                );
            return userSpecificAnswerViews;
        }

        async Task<Answer> IAnswerRepository.FindAsync(int id)
        {
            return await _context.Answers.FindAsync(id);
        }

        async Task IAnswerRepository.UpdateAsync(Answer answer)
        {
            var dbRecord = await (this as IAnswerRepository).FindProtectedAsync(answer.Id);

            dbRecord.ProtectedAnswerContent.HtmlContent = answer.ProtectedAnswerContent.HtmlContent;
            dbRecord.RedactedHtmlContent = answer.RedactedHtmlContent;
            dbRecord.IsDeleted = answer.IsDeleted;
            dbRecord.IsProtected = answer.IsProtected;
            dbRecord.ExpiryDate = answer.ExpiryDate;
        }

        async Task<Answer> IAnswerRepository.FindProtectedAsync(int id)
        {
            return await _context.Answers
                .Include(x => x.ProtectedAnswerContent)
                .SingleAsync(x => x.Id.Equals(id));
        }

        #endregion
    }
}
