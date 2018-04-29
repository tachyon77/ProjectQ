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

        async Task<IEnumerable<UserSpecificQuestionPreview>> 
            IQuestionRepository.GetAllForUserAsync(int userId)
        {

            var questionPreviews = 
                from question in _context.Questions.Where(q => !q.IsDeleted)
                select new UserSpecificQuestionPreview()
                {
                    IsFollowing = question.QuestionFollowers.Any(
                            x => x.IsFollowing && x.UserId == userId),
                    Question = question,
                    PreviewAnswer = question.Answers
                                    .Where(a => !a.IsDeleted)
                                    .OrderByDescending(a => a.OriginDate)
                                    .SingleOrDefault()
                };

            return await questionPreviews.ToListAsync();
        }

        async Task<Question> IQuestionRepository.FindAsync(int id)
        {
            return await _context.Questions
                .Include(x => x.Answers)
                .Include(x=>x.User)
                .Include(x=>x.QuestionFollowers)
                .SingleAsync(x => x.Id.Equals(id));
        }

        bool IQuestionRepository.QuestionExists(int id)
        {
            return _context.Questions.Any(x => x.Id == id);
        }

        async Task<IEnumerable<Question>> IQuestionRepository.GetAllAskedByAsync(
            int userId)
        {
            return await _context.Questions
                .Where(x => x.UserId.Equals(userId) && !x.IsDeleted)
                .OrderByDescending(x=>x.OriginDate)
                .ToListAsync();
        }
    }
}
