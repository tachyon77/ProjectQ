using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectQ.DAL
{ 
    public interface IUnitOfWork
    {
        IQuestionRepository QuestionRepository { get; }
        IAnswerRepository AnswerRepository { get; }
        IUserRepository UserRepository { get; }
        Task Save();
    }
}
