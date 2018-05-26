using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IAnswerDraftRepository
    {
        Task AddAsync(AnswerDraft draft);
        Task UpdateAsync(AnswerDraft draft);
        Task DeleteAsync(int answerId);
        AnswerDraft GetForQuestionAndUser(int questionId, int userId);
        Task<AnswerDraft> FindAsync(int id);
        bool AnswerDraftExists(int id);
    }

    public interface IQuestionFollowerRepository
    {
        Task AddFollowerAsync(QuestionFollower questionFollower);
        Task RemoveFollowerAsync(int questionId, int userId);
        HashSet<int> GetFollowersForQuestion(int questionId);

    }

    public interface IPurchasedAnswerRepository
    {
        Task AddAsync(PurchasedAnswer purchasedAnswer);
        Task<IEnumerable<PurchasedAnswerView>> GetForUserAsync(int userId);
    }

    public interface IUserRepository
    {
        Task AddAsync(User user);
        Task<User> FindAsync(int id);
        User FindByUniqueName(string uniqueName);
        Task UpdateAsync(int id, User updated);
    }

    public interface IQuestionRepository
    {
        Task AddAsync(Question question);
        Task UpdateAsync(Question question);
        Task<IEnumerable<UserSpecificQuestionPreview>> GetAllForUserAsync(int userId);
        Task<IEnumerable<Question>> GetAllAskedByAsync(int userId);
        Task<Question> FindAsync(int id);
        bool QuestionExists(int id);
    }

    public interface INotificationRepository
    {
        Task<Notification> FindAsync(int id);
        Task AddAsync(Notification notification);
        Task UpdateAsync(Notification notification);
        Task<IEnumerable<Notification>> GetUnseenForUserAsyc(int userId);
    }

    public interface IEmploymentRepository
    {
        IEnumerable<Employment> GetAllForUser(int id);
        Task<Employment> FindAsync(int employmentId);
        Task AddAsync(int userId, Employment employment);
        Task UpdateAsync(Employment employment);
    }

    public interface IEducationRepository
    {
        IEnumerable<Education> GetAllForUser(int userId);
        Task<Education> FindAsync(int educationId);
        Task AddAsync(int userId, Education educaiton);
        Task UpdateAsync(Education educaiton);
    }

    public interface IAnswerRatingRepository
    {
        Task AddAsync(AnswerRating answerRating);
        Task UpdateAsync(AnswerRating answerRating);
        Task<AnswerRating> GetByAnswerAndUserAsync(int answerId, int userId);
        Task<AnswerRating> FindAsync(int id);
    }

    public interface IAnswerRepository
    {
        Task AddAsync(Answer answer);
        Task UpdateAsync(Answer answer);
        Task DeleteAsync(int answerId);
        Task<IEnumerable<UserSpecificAnswerView>> GetViewForQuestionAndUserAsync(
            int questionId,
            int userId);
        //Task<Answer> GetAnswerWrittenByUserForQuestion(int userId, int questionId);
        Task<Answer> FindAsync(int id);
        Task<ProtectedAnswerContent> FindProtectedAsync(int answerId);
        bool AnswerExists(int id);
    }
}
