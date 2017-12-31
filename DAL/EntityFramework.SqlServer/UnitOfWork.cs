using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using ProjectQ.DAL;

namespace ProjectQ.DAL.EntityFramework.SqlServer
{
    /// <summary>
    /// Implements Entity Framework based implementation of IUnitOfWork
    /// </summary>
    public class UnitOfWork: IUnitOfWork
    {
        private ProjectQEntities Context = new ProjectQEntities();
        private IQuestionRepository questionRepository;

        IQuestionRepository IUnitOfWork.QuestionRepository
        {
            get
            {
                if (questionRepository == null)
                {
                    questionRepository = new QuestionRepository(Context);                 
                }
                return questionRepository;
            }
        }
     
        async Task IUnitOfWork.Save()
        {
            await Context.SaveChangesAsync();
        }

    }
}
