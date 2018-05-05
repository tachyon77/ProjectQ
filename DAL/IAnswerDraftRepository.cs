using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IAnswerDraftRepository
    {
        Task AddAsync(AnswerDraft draft);
        Task UpdateAsync(AnswerDraft draft);
        Task DeleteAsync(int answerId);
        Task<AnswerDraft> GetForQuestionAndUserAsync(int questionId, int userId);
        Task<AnswerDraft> FindAsync(int id);
        Task<ProtectedAnswerContent> FindProtectedAsync(int id);
        bool AnswerDraftExists(int id);
    }
}
