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
        Task AddOrUpdateAsync(int userId, AnswerDraft draft);
        Task DeleteAsync(int userId, int draftId);
        AnswerDraft GetForQuestionAndUser(int questionId, int userId);
        Task<AnswerDraft> FindAsync(int id);
        bool AnswerDraftExists(int id);
    }
}
