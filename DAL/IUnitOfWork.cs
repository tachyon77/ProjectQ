using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectQ.DAL
{ 
    public interface IUnitOfWork
    {
        IQuestionFollowerRepository QuestionFollowerRepository { get; }
        IQuestionRepository QuestionRepository { get; }
        IAnswerRepository AnswerRepository { get; }
        INotificationRepository NotificationRepository { get; }
        IAnswerRatingRepository AnswerRatingRepository { get; }
        IUserRepository UserRepository { get; }
        IEducationRepository EducationRepository { get; }
        IEmploymentRepository EmploymentRepository { get; }
        Task SaveAsync();
    }
}
