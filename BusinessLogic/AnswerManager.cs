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

        async Task IAnswerManager.Add(Answer Answer)
        {
            // This code will not be present in production
            Answer.UserId = DateTime.Now.Second % 3 + 1;
            // End

            _unitOfWork.AnswerRepository.Add(Answer);
            await _unitOfWork.Save();
        }

        async Task<IEnumerable<Answer>> IAnswerManager.GetForQuestion(int questionId)
        {
            return await _unitOfWork.AnswerRepository.GetForQuestion(questionId);
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
