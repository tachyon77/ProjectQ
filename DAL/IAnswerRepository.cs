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
        Task<IEnumerable<AnswerDetail>> GetForQuestionAsyc(int questionId);
        Task<Answer> GetByIdAsync(int id);
        bool AnswerExists(int id);
    }
}
