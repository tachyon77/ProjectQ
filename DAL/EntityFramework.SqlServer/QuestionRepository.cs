using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework.SqlServer
{
    public class QuestionRepository : IQuestionRepository
    {
        #region Private Members
        private ProjectQEntities Context;
        #endregion

        public QuestionRepository(ProjectQEntities context)
        {
            Context = context;
        }
        async Task IQuestionRepository.Add(Question question)
        {
            Context.Questions.Add(question);
            await Context.SaveChangesAsync();
        }

        IEnumerable<Question> IQuestionRepository.GetAll()
        {
            throw new NotImplementedException();
        }

        Task<Question> IQuestionRepository.GetById(int id)
        {
            throw new NotImplementedException();
        }

        bool IQuestionRepository.QuestionExists(int id)
        {
            throw new NotImplementedException();
        }
    }
}
