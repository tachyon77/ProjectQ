using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework.SqlServer
{
    public class AnswerRepository : IAnswerRepository
    {
        #region Private Members
        private ProjectQEntities Context;
        #endregion

        public AnswerRepository(ProjectQEntities context)
        {
            Context = context;
        }
        async Task IAnswerRepository.AddAnswer(Answer answer)
        {
            Context.Answers.Add(answer);
            await Context.SaveChangesAsync();
        }
    }
}
