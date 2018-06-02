using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using ProjectQ.DAL;

namespace ProjectQ.BusinessLogic
{
    public class QuestionTopicManager : IQuestionTopicManager
    {
        #region Private Members
        private IUnitOfWork _unitOfWork;
        #endregion

        #region Public Members

        public QuestionTopicManager(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        async Task IQuestionTopicManager.AddAsync(int questionId, int topicId)
        {
            var questionTopic = new QuestionTopic()
            {
                QuestionId = questionId,
                TopicId = topicId
            };

            await _unitOfWork.QuestionTopicRepository.AddAsync(questionTopic);
        }

        Task<IEnumerable<Topic>> IQuestionTopicManager.GetAllForQuestionAsync(int questionId)
        {
            throw new NotImplementedException();
        }

        Task IQuestionTopicManager.RemoveAsync(int questionId, int topicId)
        {
            throw new NotImplementedException();
        }


        #endregion
    }
}
