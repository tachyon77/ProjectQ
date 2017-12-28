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
        private ProjectQEntities Context;
        #endregion

        public QuestionRepository(ProjectQEntities context)
        {
            Context = context;
        }
        async Task IQuestionRepository.AddQuestion(Question question)
        {
            Context.Questions.Add(question);
            await Context.SaveChangesAsync();
        }
    }
}
