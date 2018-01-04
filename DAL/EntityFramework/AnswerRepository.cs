using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework
{
    public class AnswerRepository : IAnswerRepository
    {
        #region Private Members
        private ProjectQEntities _context;
        #endregion

        public AnswerRepository(ProjectQEntities context)
        {
            _context = context;
        }
        void IAnswerRepository.Add(Answer answer)
        {
            _context.Answers.Add(answer);           
        }

        bool IAnswerRepository.AnswerExists(int id)
        {
            throw new NotImplementedException();
        }

        async Task<IEnumerable<Answer>> IAnswerRepository.GetForQuestion(int questionId)
        {
            var answers = await _context.Answers
                .Where(x => x.QuestionId == questionId)
                .ToListAsync();
            return answers;                          
        }

        Task<Answer> IAnswerRepository.GetById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
