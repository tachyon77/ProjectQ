using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
        async Task IAnswerRepository.Add(Answer answer)
        {
            _context.Answers.Add(answer);
            await _context.SaveChangesAsync();
        }

        bool IAnswerRepository.AnswerExists(int id)
        {
            throw new NotImplementedException();
        }

        IEnumerable<Answer> IAnswerRepository.GetAll()
        {
            return _context.Answers;
        }

        Task<Answer> IAnswerRepository.GetById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
