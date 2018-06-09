using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectQ.DAL
{ 
    public interface IUnitOfWork
    {
        IInvitationRequestRepository InvitationRequestRepository { get; }
        IQuestionFollowerRepository QuestionFollowerRepository { get; }
        IQuestionRepository QuestionRepository { get; }
        IQuestionViewRepository QuestionViewRepository { get; }
        IQuestionTopicRepository QuestionTopicRepository { get; }
        IAnswerRepository AnswerRepository { get; }
        IAnswerPaymentRepository AnswerPaymentRepository { get; }
        IPurchasedAnswerRepository PurchasedAnswerRepository { get; }
        IAnswerDraftRepository AnswerDraftRepository { get; }
        INotificationRepository NotificationRepository { get; }
        IAnswerRatingRepository AnswerRatingRepository { get; }
        IUserRepository UserRepository { get; }
        IEducationRepository EducationRepository { get; }
        IEmploymentRepository EmploymentRepository { get; }
        Task SaveAsync();
    }
}
