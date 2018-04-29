using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IAnswerManager
    {
        Task<int> AddAsync(Answer answer, int userId);
        Task UpdateAsync(int userId, Answer answer);
        Task<IEnumerable<UserSpecificAnswerView>> GetForQuestionAndUserAsync(
            int questionId, int userId);
        Task<Answer> FindAsync(int id);
        Task<ProtectedAnswerContent> FindProtectedAsync(int userId, int answerId);
        bool AnswerExists(int id);
    }
}
