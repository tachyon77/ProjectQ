using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework
{
    /// <summary>
    /// Implements Entity Framework based implementation of IUnitOfWork
    /// </summary>
    public class UnitOfWork: IUnitOfWork
    {
        private readonly ProjectQEntities _context;
        private IQuestionRepository questionRepository;

        public UnitOfWork(ProjectQEntities context)
        {
            _context = context;
        }

        IQuestionRepository IUnitOfWork.QuestionRepository
        {
            get
            {
                if (questionRepository == null)
                {
                    questionRepository = new QuestionRepository(_context);                 
                }
                return questionRepository;
            }
        }
     
        async Task IUnitOfWork.Save()
        {
            await _context.SaveChangesAsync();
        }

    }
}
