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
        Task Add(Answer answer);
        Task<IEnumerable<Answer>> GetForQuestion(int questionId);
        Task<Answer> GetById(int id);
        bool AnswerExists(int id);
    }
}
