
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using Microsoft.EntityFrameworkCore;

namespace ProjectQ.DAL.EntityFramework
{
    public class QuestionFollowerRepository : IQuestionFollowerRepository
    {
        #region Private Members
        private ProjectQEntities _context;
        #endregion

        public QuestionFollowerRepository(ProjectQEntities context)
        {
            _context = context;
        }

        async Task IQuestionFollowerRepository.AddQuestionFollowerAsync(
            QuestionFollower questionFollower)
        {
            questionFollower.OriginDate = DateTime.UtcNow;
            await _context.QuestionFollowers.AddAsync(questionFollower);
        }

        Task IQuestionFollowerRepository.UpdateQuestionFollowerAsync(
            QuestionFollower questionFollower)
        {
            throw new NotImplementedException();
        }
    }
}
