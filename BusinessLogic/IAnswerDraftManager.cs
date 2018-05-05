using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IAnswerDraftManager
    {
        Task<int> AddAsync(AnswerDraft draft, int userId);
        Task UpdateAsync(int userId, AnswerDraft draft);
        Task DeleteAsync(int userId, int draftId);
        Task<AnswerDraft> GetForQuestionAndUserAsync(
            int questionId, int userId);
        Task<AnswerDraft> FindAsync(int id);
        Task<ProtectedAnswerContent> FindProtectedAsync(int userId, int answerId);
        bool AnswerDraftExists(int id);
    }
}
