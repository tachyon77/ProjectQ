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
        Task<IEnumerable<Answer>> GetForQuestionAsyc(int questionId);
        Task<Answer> GetById(int id);
        bool AnswerExists(int id);
    }
}
