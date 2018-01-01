using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IAnswerManager
    {
        Task Add(Answer answer);
        IEnumerable<Answer> GetAll();
        Task<Answer> GetById(int id);
        bool AnswerExists(int id);
    }
}
