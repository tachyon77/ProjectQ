using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

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
            _context.Questions.Add(question);
            await _context.SaveChangesAsync();
        }

        IEnumerable<Question> IQuestionRepository.GetAll()
        {
            return _context.Questions;
        }

        Task<Question> IQuestionRepository.GetById(int id)
        {
            throw new NotImplementedException();
        }

        bool IQuestionRepository.QuestionExists(int id)
        {
            return _context.Questions.Any(x => x.Id == id);
        }

        async Task IQuestionRepository.UpdateOfferedPrice(
            int questionId, 
            decimal offeredPrice)
        {
            var question = await 
                _context.Questions.FindAsync(questionId);

            question.OfferedPrice = offeredPrice;
        }
    }
}
