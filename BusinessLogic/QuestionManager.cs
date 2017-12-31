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
        
        async Task IQuestionManager.Add(Question question)
        {
            await _unitOfWork.QuestionRepository.Add(question);
        }

        IEnumerable<Question> IQuestionManager.GetAll()
        {
            return _unitOfWork.QuestionRepository.GetAll();
        }

        Task<Question> IQuestionManager.GetById(int id)
        {
            return _unitOfWork.QuestionRepository.GetById(id);
        }

        bool IQuestionManager.QuestionExists(int id)
        {
            return _unitOfWork.QuestionRepository.QuestionExists(id);
        }

        #endregion
    }
}
