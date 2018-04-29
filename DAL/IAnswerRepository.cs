using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IAnswerRepository
    {
        Task AddAsync(Answer answer);
        Task UpdateAsync(Answer answer);
        Task DeleteAsync(int answerId);
        Task<IEnumerable<UserSpecificAnswerView>> GetForQuestionAndUserAsync(
            int questionId,
            int userId);
        Task<Answer> FindAsync(int id);
        Task<ProtectedAnswerContent> FindProtectedAsync(int id);
        bool AnswerExists(int id);
    }
}
