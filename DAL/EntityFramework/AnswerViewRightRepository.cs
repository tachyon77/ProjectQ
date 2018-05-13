using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework
{
    public class AnswerViewRightRepository : IAnswerViewRightRepository
    {
        #region Fields
        private readonly ProjectQEntities _context;
        #endregion

        #region Constructors

        public AnswerViewRightRepository(ProjectQEntities context)
        {
            _context = context;
        }

        #endregion

        #region Interface Implementations

        async Task<bool> IAnswerViewRightRepository.HasViewRightFor(int userId, int answerId)
        {
            return await _context.AnswerViewRights
                .AnyAsync(r => r.UserId.Equals(userId) && r.AnswerId.Equals(answerId));
        }

        #endregion
    }
}
