using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.DAL;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public class AnswerManager : IAnswerManager
    {
        #region Private Members
        private IUnitOfWork _unitOfWork;
        #endregion

        #region Public Members

        public AnswerManager(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        async Task<int> IAnswerManager.AddAsync(Answer answer, string email)
        {
            if (!_unitOfWork.QuestionRepository
                .QuestionExists(answer.QuestionId))
                throw new Exception();

            answer.OriginDate = DateTime.UtcNow;

            answer.UserId = _unitOfWork
                .UserRepository.GetByEmail(email).Id;

            await _unitOfWork.AnswerRepository.AddAsync(answer);
            await _unitOfWork.SaveAsync();

            return answer.Id;
        }

        async Task IAnswerManager.UpdateAsync(Answer answer)
        {
            await _unitOfWork.AnswerRepository
                .UpdateAsync(answer);
            await _unitOfWork.SaveAsync();
        }

        async Task<IEnumerable<Answer>> IAnswerManager.GetForQuestionAsync(int questionId)
        {
            return await _unitOfWork
                .AnswerRepository
                .GetForQuestionAsyc(questionId);
        }

        Task<Answer> IAnswerManager.GetById(int id)
        {
            return _unitOfWork.AnswerRepository.GetById(id);
        }

        bool IAnswerManager.AnswerExists(int id)
        {
            return _unitOfWork.AnswerRepository.AnswerExists(id);
        }

        #endregion
    }
}
