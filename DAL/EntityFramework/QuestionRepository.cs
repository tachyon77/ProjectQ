using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using Microsoft.EntityFrameworkCore;

namespace ProjectQ.DAL.EntityFramework
{
    public class QuestionRepository : IQuestionRepository
    {
        #region Private Members
        private ProjectQEntities _context;
        #endregion

        public QuestionRepository(ProjectQEntities context)
        {
            _context = context;
        }
        async Task IQuestionRepository.AddAsync(Question question)
        {
            await _context.Questions.AddAsync(question);
        }

        async Task IQuestionRepository.UpdateAsync(Question question)
        {
            var dbRecord = await _context.Questions.FindAsync(question.Id);

            dbRecord.Title = question.Title;
            dbRecord.Description = question.Description;
            dbRecord.OfferedPrice = question.OfferedPrice;
            dbRecord.IsDeleted = question.IsDeleted;
        }

        IEnumerable<Question> IQuestionRepository.GetAll()
        {
            return _context.Questions.Include(x => x.User)
                .Where(x=>!x.IsDeleted);
        }

        async Task<Question> IQuestionRepository.GetByIdAsync(int id)
        {
            return await _context.Questions
                .Include(x => x.User)
                .SingleAsync(x=>x.Id == id);
        }

        bool IQuestionRepository.QuestionExists(int id)
        {
            return _context.Questions.Any(x => x.Id == id);
        }

    }
}
