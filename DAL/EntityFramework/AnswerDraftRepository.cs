using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        AnswerDraft
            IAnswerDraftRepository.GetForQuestionAndUser(
            int questionId,
            int userId)
        {
            return _context.AnswerDrafts.FirstOrDefault
                (
                    x =>
                        !x.IsDeleted 
                    &&  x.QuestionId.Equals(questionId)
                    &&  x.UserId.Equals(userId)
                );
        }

        async public Task<AnswerDraft> FindAsync(int id)
        {
            return await _context.AnswerDrafts.FindAsync(id);
        }

        async Task IAnswerDraftRepository.UpdateAsync(AnswerDraft draft)
        {
            var dbRecord = await FindAsync(draft.Id);

            dbRecord.HtmlContent = draft.HtmlContent;
            dbRecord.IsProtected = draft.IsProtected;
            dbRecord.ExpiryDate = draft.ExpiryDate;
        }


        async public Task DeleteAsync(int answerId)
        {
            var dbRecord = await FindAsync(answerId);
            dbRecord.IsDeleted = true;
        }

        #endregion

    }
}
