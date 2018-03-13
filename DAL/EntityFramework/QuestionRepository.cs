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

        async Task<IEnumerable<QuestionPreview>> IQuestionRepository.GetAll()
        {
            var data = await (from question in _context.Questions
                   .Where(x => !x.IsDeleted)
                         select new QuestionPreview()
                         {
                             Asker = question.AspNetUser,
                             Question = question,
                             AnswerCount = question.Answers != null? question.Answers.Where(a=>!a.IsDeleted).Count() : 0,
                             PreviewAnswer = 
                                question.Answers != null ?
                                    question.Answers.Where(a => !a.IsDeleted).OrderByDescending(y=>y.OriginDate).FirstOrDefault() 
                                    : 
                                    null
                         }).ToListAsync();
            return data;
        }

        async Task<Question> IQuestionRepository.GetByIdAsync(int id)
        {
            return await _context.Questions
                .Include(x => x.AspNetUser)
                .SingleAsync(x=>x.Id == id);
        }

        bool IQuestionRepository.QuestionExists(int id)
        {
            return _context.Questions.Any(x => x.Id == id);
        }

    }
}
