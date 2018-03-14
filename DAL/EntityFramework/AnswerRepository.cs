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

        async Task<IEnumerable<AnswerDetail>> 
            IAnswerRepository.GetForQuestionAsyc(int questionId)
        {
            var answers =
                from answer in _context.Answers
                .Where(
                    x => !x.IsDeleted && x.QuestionId == questionId
                )
                select new AnswerDetail()
                {
                    Answerer = answer.AspNetUser.flatten(),
                    Answer = answer.flatten()
                };
       
            return await answers.ToListAsync();                          
        }

        async Task<Answer> IAnswerRepository.GetByIdAsync(int id)
        {
            return await _context.Answers.FindAsync(id);
        }

        async Task IAnswerRepository.UpdateAsync(Answer answer)
        {
            var dbRecord = await _context.Answers.FindAsync(answer.Id);

            dbRecord.text = answer.text;
            dbRecord.IsDeleted = answer.IsDeleted;
        }
    }
}
