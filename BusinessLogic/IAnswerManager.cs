using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IAnswerManager
    {
        Task<int> AddAsync(Answer answer, string userId);
        Task UpdateAsync(Answer answer);
        Task<IEnumerable<AnswerDetail>> GetForQuestionAndUserAsync(
            int questionId, string userId);
        Task<Answer> GetById(int id);
        bool AnswerExists(int id);
    }
}
