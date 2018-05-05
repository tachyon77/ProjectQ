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

        // This method should not rely on draft.Id as the Id wouldn't always be valid.
        async Task IAnswerDraftManager.AddOrUpdateAsync(int userId, AnswerDraft draft)
        {
            try
            {
                var dbRecord = _unitOfWork.AnswerDraftRepository.GetForQuestionAndUser(draft.QuestionId, userId);

                if (dbRecord == default(AnswerDraft))
                {
                    await (this as IAnswerDraftManager).AddAsync(draft, userId);
                }
                else
                {
                    if (dbRecord.UserId != userId)
                    {
                        throw new Exception("Unauthorized");
                    }

                    draft.Id = dbRecord.Id;

                    await _unitOfWork.AnswerDraftRepository
                        .UpdateAsync(draft);
                    await _unitOfWork.SaveAsync();
                }
            }catch (Exception _e)
            {
                Console.WriteLine(_e.StackTrace);
            }
        }

        public Task DeleteAsync(int userId, int whatId)
        {
            throw new NotImplementedException();
        }

        AnswerDraft
            IAnswerDraftManager.GetForQuestionAndUser(
            int questionId, int userId)
        {
            return
                _unitOfWork
                .AnswerDraftRepository
                .GetForQuestionAndUser(questionId, userId);
        }

        async public Task<AnswerDraft> FindAsync(int id)
        {
            return await _unitOfWork.AnswerDraftRepository.FindAsync(id);
        }

        bool IAnswerDraftManager.AnswerDraftExists(int id)
        {
            return _unitOfWork.AnswerDraftRepository.AnswerDraftExists(id);
        }

        #endregion
    }
}
