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

        async Task<IEnumerable<UserSpecificQuestionView>> 
            IQuestionRepository.GetAllForUser(ApplicationUser user)
        {
            var questions = await _context.Questions
                .Include(x => x.Answers)
                .Include(x => x.AspNetUser)
                .Include(x => x.QuestionFollowers)
                .Where(x => !x.IsDeleted).ToListAsync();

            var questionViews = questions.ConvertAll
                (
                    q =>
                    new UserSpecificQuestionView()
                    {
                        IsFollowing = q.QuestionFollowers.Any(
                                x => x.IsFollowing && x.AspNetUserId == user.Id),
                        Question = q,
                    }                    
                );
            return questionViews;
        }

        async Task<Question> IQuestionRepository.GetByIdAsync(int id)
        {
            return await _context.Questions
                .Include(x => x.Answers)
                .Include(x=>x.AspNetUser)
                .Include(x=>x.QuestionFollowers)
                .SingleAsync(x => x.Id.Equals(id));
        }

        bool IQuestionRepository.QuestionExists(int id)
        {
            return _context.Questions.Any(x => x.Id == id);
        }

        async Task<IEnumerable<Question>> IQuestionRepository.GetAllAskedBy(
            ApplicationUser user)
        {
            return await _context.Questions
                .Where(x => x.AspNetUserId.Equals(user.Id) && !x.IsDeleted)
                .OrderByDescending(x=>x.OriginDate)
                .ToListAsync();
        }
    }
}
