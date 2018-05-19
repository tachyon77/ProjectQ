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
        Task<IEnumerable<UserSpecificAnswerView>> GetViewForQuestionAndUserAsync(
            int questionId,
            int userId);
        //Task<Answer> GetAnswerWrittenByUserForQuestion(int userId, int questionId);
        Task<Answer> FindAsync(int id);
        Task<ProtectedAnswerContent> FindProtectedAsync(int answerId);
        bool AnswerExists(int id);
    }
}
