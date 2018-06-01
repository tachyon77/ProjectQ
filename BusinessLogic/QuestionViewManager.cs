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
        

        async Task IQuestionViewManager.AddAsync(int questionId, int userId)
        {
            var questionView = new QuestionView()
            {
                QuestionId = questionId,
                UserId = userId,
                EventTime = DateTime.UtcNow,
                IPAddress = "0.0.0.0"
            };

            await _unitOfWork.QuestionViewRepository.AddAsync(questionView);

            try
            {
                await _unitOfWork.SaveAsync();
            }
            catch
            {
                // we catch and ignore for two reasons:
                // 1. This is a non critical operation. So nothing big if there is an issue
                // We should do better logging though.
                // 2. We might be doing an add, when record already exists. We are just
                // relying on exception instead of proactively checking for it.
            }
        }

        #endregion
    }
}
