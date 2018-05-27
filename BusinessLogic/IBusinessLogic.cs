﻿using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IAnswerDraftManager
    {
        Task<int> AddAsync(AnswerDraft draft, int userId);
        Task AddOrUpdateAsync(int userId, AnswerDraft draft, bool shouldSaveContext);
        Task DeleteAsync(int userId, int draftId);
        AnswerDraft GetForQuestionAndUser(int questionId, int userId);
        Task<AnswerDraft> FindAsync(int id);
        bool AnswerDraftExists(int id);
    }

    public interface IAnswerManager
    {
        Task<int> AddAsync(Answer answer, int userId);
        Task UpdateAsync(int userId, Answer answer);
        Task DeleteAsync(int userId, int answerId);
        Task<IEnumerable<UserSpecificAnswerView>> GetForQuestionAndUserAsync(
            int questionId, int userId);
        Task<Answer> FindAsync(int id);
        //Task<ProtectedAnswerContent> FindProtectedAsync(int userId, int answerId);
        bool AnswerExists(int id);
    }

    public interface IAnswerRatingManager
    {
        // Client should not need to know if rating entry already exists or not.
        Task<int> AddOrUpdateAsync(AnswerRating answerRating, int userId);
        Task<AnswerRating> FindAsync(int id);
    }

    public interface ICredentialsManager
    {
        Credentials GetForUser(int userId);
        Task AddEducationAsync(int userId, Education education);
        Task UpdateEducationAsync(int userId, Education education);
        Task AddEmploymentAsync(int userIf, Employment employment);
        Task UpdateEmploymentAsync(int userId, Employment employment);
    }

    public interface INotificationManager
    {
        Task MarkSeenAsync(int id);
        Task MarkAllSeenAsync(int userId);
        Task<IEnumerable<Notification>> GetForUserAsync(int userId);
    }

    public interface IPurchaseAnswerManager
    {
        // This is to be called after payment/credit card transaction is successful
        Task<int> PurchaseAsync(int answerId, int userId, decimal price);
        Task<IEnumerable<PurchasedAnswerView>> GetForUserAsync(int userId);
    }

    public interface IQuestionFollowerManager
    {
        Task FollowAsync(int userId, int questionId);
        Task UnfollowAsync(int userId, int questionId);
    }

    public interface IUserManager
    {
        Task<User> AddAsync(string name);
        Task<User> FindAsync(int id);
        User FindByUniqueName(string uniqueName);
        Task UpdateAsync(int id, User updated);
    }

    /// <summary>
    /// 1. Ask question
    /// 2. Set price
    /// 3. Set deadline
    /// 4. Set minimum qualification
    /// 5. Set specific list of people
    /// 6. Specify privacy
    /// 7. Specify ownership
    /// 8. Specify block list
    /// 9. Accept answer
    /// 10. Pay
    /// </summary>
    public interface IQuestionManager
    {
        Task AddAsync(Question question, int userId);
        Task UpdateAsync(int userId, Question question);
        Task<IEnumerable<UserSpecificQuestionPreview>> GetAllForUserAsync(int userId);
        Task<IEnumerable<Question>> GetAllAskedByAsync(int userId);
        Task<Question> FindAsync(int id);
        bool QuestionExists(int id);
    }
}