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
        private IQuestionRepository _questionRepository;

        public UnitOfWork(ProjectQEntities context)
        {
            _context = context;
        }

        IQuestionRepository IUnitOfWork.QuestionRepository
        {
            get
            {
                if (_questionRepository == null)
                {
                    _questionRepository = new QuestionRepository(_context);                 
                }
                return _questionRepository;
            }
        }
     
        async Task IUnitOfWork.Save()
        {
            await _context.SaveChangesAsync();
        }

    }
}
