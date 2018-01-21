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
        async Task IAnswerRepository.AddAsync(Answer answer)
        {
            await _context.Answers.AddAsync(answer);
        }

        bool IAnswerRepository.AnswerExists(int id)
        {
            throw new NotImplementedException();
        }

        async Task<IEnumerable<Answer>> 
            IAnswerRepository.GetForQuestionAsyc(int questionId)
        {
            var answers = await _context.Answers
                .Include(x=>x.User)
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
