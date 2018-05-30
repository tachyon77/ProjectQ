using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using Microsoft.EntityFrameworkCore;

namespace ProjectQ.DAL.EntityFramework
{
    public class QuestionViewRepository : IQuestionViewRepository
    {
        #region Private Members
        private ProjectQEntities _context;
        #endregion

        public QuestionViewRepository(ProjectQEntities context)
        {
            _context = context;
        }
        async Task IQuestionViewRepository.AddAsync(QuestionView questionView)
        {
            await _context.QuestionViews.AddAsync(questionView);
        }
    }
}
