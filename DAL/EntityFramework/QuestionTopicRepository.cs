using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using Microsoft.EntityFrameworkCore;

namespace ProjectQ.DAL.EntityFramework
{
    public class QuestionTopicRepository : IQuestionTopicRepository
    {
        #region Private Members
        private ProjectQEntities _context;
        #endregion

        public QuestionTopicRepository(ProjectQEntities context)
        {
            _context = context;
        }

        async Task IQuestionTopicRepository.AddAsync(QuestionTopic questionTopic)
        {
            await _context.QuestionTopics.AddAsync(questionTopic);
        }

        Task<IEnumerable<Topic>> IQuestionTopicRepository.GetAllForQuestionAsync(int questionId)
        {
            throw new NotImplementedException();
        }

        Task IQuestionTopicRepository.RemoveAsync(QuestionTopic _)
        {
            throw new NotImplementedException();
        }
    }
}
