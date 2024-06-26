﻿using System;
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
        

        async Task IQuestionManager.AddAsync(Question question, int userId)
        {
            question.UserId = userId;
            question.OriginDate = DateTime.UtcNow;

            await _unitOfWork.QuestionRepository.AddAsync(question);
            await _unitOfWork.SaveAsync();
        }

        async Task<IEnumerable<Question>> IQuestionManager.GetAllAskedByAsync(
            int userId)
        {
            return (await _unitOfWork
                .QuestionRepository
                .GetAllAskedByAsync(userId))
                .OrderByDescending(x => x.OriginDate);
        }

        async Task<IEnumerable<UserSpecificQuestionPreview>> IQuestionManager.GetAllForUserAsync(
            int? userId
            )
        {
            var questionPreviews = (await _unitOfWork
                .QuestionRepository
                .GetAllForUserAsync(userId))
                .OrderByDescending(x=>x.Question.OriginDate);

            questionPreviews.ToList().ForEach(questionPreview =>
            {
                if (questionPreview.Question.IsAnonymous)
                {
                    if (userId.HasValue && questionPreview.Question.User.Id == userId)
                    {
                        questionPreview.Question.User = new User() { Name = "You [Anonymously]" };
                    }
                    else
                    {
                        questionPreview.Question.User = new User() { Name = "Anonymous" };
                    }

                };
            });

            return questionPreviews;
        }

        async Task<Question> IQuestionManager.FindAsync(int id)
        {
            return await _unitOfWork
                .QuestionRepository.FindAsync(id);
        }

        bool IQuestionManager.QuestionExists(int id)
        {
            return _unitOfWork.QuestionRepository
                .QuestionExists(id);
        }

        async Task IQuestionManager.UpdateAsync(int userId, Question question)
        {
            var dbRecord = await _unitOfWork.QuestionRepository.FindAsync(question.Id);
            if (dbRecord.UserId != userId)
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
