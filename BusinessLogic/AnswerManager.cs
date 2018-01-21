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

        async Task IAnswerManager.Add(Answer answer, string email)
        {
            if (!_unitOfWork.QuestionRepository
                .QuestionExists(answer.QuestionId))
                throw new Exception();

            answer.OriginDate = DateTime.UtcNow;

            answer.UserId = _unitOfWork
                .UserRepository.GetByEmail(email).Id;

            _unitOfWork.AnswerRepository.Add(answer);
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
