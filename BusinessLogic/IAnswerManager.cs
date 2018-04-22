using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IAnswerManager
    {
        Task<int> AddAsync(Answer answer, ApplicationUser user);
        Task UpdateAsync(Answer answer);
        Task<IEnumerable<UserSpecificAnswerView>> GetForQuestionAndUserAsync(
            int questionId, string userId);
        Task<Answer> GetById(int id);
        bool AnswerExists(int id);
    }
}
