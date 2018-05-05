using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using ProjectQ.DAL;
using ProjectQ.Model;
using ProjectQ.BusinessLogic.Services;

namespace ProjectQ.BusinessLogic
{
    public class AnswerDraftManager : IAnswerDraftManager
    {
        #region Fields
        private IUnitOfWork _unitOfWork;
        #endregion

        #region Cosntructors

        public AnswerDraftManager(
            IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        #endregion

        #region Private Methods
        async Task<bool> IsUserAuthorizedToView(int userId, int answerId)
        {
            var draft = await FindAsync(answerId);
            return userId == draft.UserId;
            //TODO: Of course there will be other users who can be authorized
            // Need to implement table for managing view permissions.
        }
        #endregion

        #region Interface Implementations

        async Task<int> IAnswerDraftManager.AddAsync(AnswerDraft draft, int userId)
        {
            if (!_unitOfWork.QuestionRepository
                .QuestionExists(draft.QuestionId))
                throw new Exception("Question does not exist.");

            var question = await 
                _unitOfWork
                .QuestionRepository.FindAsync(draft.QuestionId);

            var user = await _unitOfWork.UserRepository.FindAsync(userId);

            draft.UserId = userId;
            draft.OriginDate = DateTime.UtcNow;

            await _unitOfWork.AnswerDraftRepository.AddAsync(draft);

            await _unitOfWork.SaveAsync();

            return draft.Id;
        }

        async Task IAnswerDraftManager.UpdateAsync(int userId, AnswerDraft draft)
        {
            var dbRecord = await _unitOfWork.AnswerDraftRepository.FindAsync(draft.Id);
            if (dbRecord.UserId != userId)
            {
                throw new Exception("Unauthorized");
            }

            await _unitOfWork.AnswerDraftRepository
                .UpdateAsync(draft);
            await _unitOfWork.SaveAsync();
        }

        async public Task DeleteAsync(int userId, int answerId)
        {
            var dbRecord = await _unitOfWork.AnswerDraftRepository.FindAsync(answerId);
            if (dbRecord.UserId != userId)
            {
                throw new Exception("Unauthorized");
            }

            await _unitOfWork.AnswerDraftRepository
                .DeleteAsync(answerId);
            await _unitOfWork.SaveAsync();
        }

        async Task<AnswerDraft> 
            IAnswerDraftManager.GetForQuestionAndUserAsync(
            int questionId, int userId)
        {
            return await
                _unitOfWork
                .AnswerDraftRepository
                .GetForQuestionAndUserAsync(questionId, userId);
        }

        async public Task<AnswerDraft> FindAsync(int id)
        {
            return await _unitOfWork.AnswerDraftRepository.FindAsync(id);
        }

        bool IAnswerDraftManager.AnswerDraftExists(int id)
        {
            return _unitOfWork.AnswerDraftRepository.AnswerDraftExists(id);
        }

        async Task<ProtectedAnswerContent> IAnswerDraftManager.FindProtectedAsync(int userId, int answerId)
        {
            if (await IsUserAuthorizedToView(userId, answerId))
            {
                return await _unitOfWork.AnswerDraftRepository.FindProtectedAsync(answerId);
            }

            throw new Exception("Unauthorized");
            
        }

        

        #endregion
    }
}
