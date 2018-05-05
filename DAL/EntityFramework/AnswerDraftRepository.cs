using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework
{
    public class AnswerDraftRepository : IAnswerDraftRepository
    {
        #region Fields
        private readonly ProjectQEntities _context;
        #endregion

        #region Constructors

        public AnswerDraftRepository(ProjectQEntities context)
        {
            _context = context;
        }
        #endregion

        #region Interface Implementations
        async Task IAnswerDraftRepository.AddAsync(AnswerDraft draft)
        {
            await _context.AnswerDrafts.AddAsync(draft);
        }

        bool IAnswerDraftRepository.AnswerDraftExists(int id)
        {
            throw new NotImplementedException();
        }

        async Task<AnswerDraft> 
            IAnswerDraftRepository.GetForQuestionAndUserAsync(
            int questionId,
            int userId)
        {
            throw new NotImplementedException();
        }

        async public Task<AnswerDraft> FindAsync(int id)
        {
            return await _context.AnswerDrafts.FindAsync(id);
        }

        async Task IAnswerDraftRepository.UpdateAsync(AnswerDraft draft)
        {
            var dbRecord = await FindAnswerIncludeProtectedAsync(draft.Id);

            dbRecord.ProtectedAnswerContent.HtmlContent = draft.ProtectedAnswerContent.HtmlContent;
            dbRecord.RedactedHtmlContent = draft.RedactedHtmlContent;
            dbRecord.IsProtected = draft.IsProtected;
            dbRecord.ExpiryDate = draft.ExpiryDate;
        }


        async public Task DeleteAsync(int answerId)
        {
            var dbRecord = await FindAsync(answerId);
            dbRecord.IsDeleted = true;
        }

        async Task<ProtectedAnswerContent> IAnswerDraftRepository.FindProtectedAsync(int id)
        {
            return (await FindAnswerIncludeProtectedAsync(id))
                .ProtectedAnswerContent;
        }

        #endregion

        #region Private methods
        async Task<AnswerDraft> FindAnswerIncludeProtectedAsync(int id)
        {
            return await _context.AnswerDrafts
                .Include(x => x.ProtectedAnswerContent)
                .SingleAsync(x => x.Id.Equals(id));
        }

        #endregion
    }
}
