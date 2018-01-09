using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IQuestionRepository
    {
        Task AddAsync(Question question);
        Task UpdateOfferedPrice(int questionId, decimal offeredPrice);
        IEnumerable<Question> GetAll();
        Task<Question> GetById(int id);
        bool QuestionExists(int id);
    }
}
