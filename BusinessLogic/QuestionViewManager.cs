using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using ProjectQ.DAL;

namespace ProjectQ.BusinessLogic
{
    public class QuestionViewManager : IQuestionViewManager
    {
        #region Private Members
        private IUnitOfWork _unitOfWork;
        #endregion

        #region Public Members

        public QuestionViewManager(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        

        async Task IQuestionViewManager.AddAsync(QuestionView questionView)
        {
            questionView.EventTime = DateTime.UtcNow;

            await _unitOfWork.QuestionViewRepository.AddAsync(questionView);
            await _unitOfWork.SaveAsync();
        }

        #endregion
    }
}
