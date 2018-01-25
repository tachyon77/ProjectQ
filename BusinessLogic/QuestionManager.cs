using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using ProjectQ.DAL;

namespace ProjectQ.BusinessLogic
{
    /// <summary>
    /// Implements features related to Questions. 
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
    public class QuestionManager : IQuestionManager
    {
        #region Private Members
        private IUnitOfWork _unitOfWork;
        #endregion

        #region Public Members

        public QuestionManager(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        

        async Task IQuestionManager.AddAsync(Question question, string email)
        {
            question.UserId = _unitOfWork
                .UserRepository.GetByEmail(email).Id;

            question.OriginDate = DateTime.UtcNow;

            await _unitOfWork.QuestionRepository.AddAsync(question);
            await _unitOfWork.SaveAsync();
        }

        IEnumerable<Question> IQuestionManager.GetAll()
        {
            return _unitOfWork
                .QuestionRepository
                .GetAll()
                .OrderByDescending(x=>x.OriginDate);
        }

        async Task<Question> IQuestionManager.GetByIdAsync(int id)
        {
            return await _unitOfWork
                .QuestionRepository.GetByIdAsync(id);
        }

        bool IQuestionManager.QuestionExists(int id)
        {
            return _unitOfWork.QuestionRepository
                .QuestionExists(id);
        }

        async Task IQuestionManager.UpdateAsync(Question question)
        {
            await _unitOfWork.QuestionRepository
                .UpdateAsync(question);
            await _unitOfWork.SaveAsync();
        }

        #endregion
    }
}
