using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework
{
    public class PurchasedAnswerRepository : IPurchasedAnswerRepository
    {
        #region Fields
        private readonly ProjectQEntities _context;
        #endregion

        #region Constructors

        public PurchasedAnswerRepository(ProjectQEntities context)
        {
            _context = context;
        }
        #endregion

        #region Interface Implementations
        async Task IPurchasedAnswerRepository.AddAsync(PurchasedAnswer purchasedAnswer)
        {
            await _context.PurchasedAnswers.AddAsync(purchasedAnswer);
        }

        async Task<IEnumerable<PurchasedAnswer>> IPurchasedAnswerRepository.GetForUserAsync(int userId)
        {
            return await _context.PurchasedAnswers.Where(x => x.UserId.Equals(userId)).ToListAsync();
        }

        #endregion
    }
}
