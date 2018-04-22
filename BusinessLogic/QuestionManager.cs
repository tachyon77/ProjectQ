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
        

        async Task IQuestionManager.AddAsync(Question question, string userId)
        {
            question.AspNetUserId = userId;
            question.OriginDate = DateTime.UtcNow;

            await _unitOfWork.QuestionRepository.AddAsync(question);
            await _unitOfWork.SaveAsync();
        }

        async Task<IEnumerable<Question>> IQuestionManager.GetAllAskedBy(
            ApplicationUser user)
        {
            return (await _unitOfWork
                .QuestionRepository
                .GetAllAskedBy(user))
                .OrderByDescending(x => x.OriginDate);
        }

        async Task<IEnumerable<UserSpecificQuestionView>> IQuestionManager.GetAllForUser(
            ApplicationUser user
            )
        {
            return (await _unitOfWork
                .QuestionRepository
                .GetAllForUser(user))
                .OrderByDescending(x=>x.Question.OriginDate);
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

        async Task IQuestionManager.UpdateAsync(string userId, Question question)
        {
            var dbRecord = await _unitOfWork.QuestionRepository.GetByIdAsync(question.Id);
            if (dbRecord.AspNetUserId != userId)
            {
                throw new Exception("Unauthorized");
            }

            await _unitOfWork.QuestionRepository
                .UpdateAsync(question);
            await _unitOfWork.SaveAsync();
        }

        #endregion
    }
}
