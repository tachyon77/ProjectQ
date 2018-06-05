using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework
{
    public class AnswerPaymentRepository : IAnswerPaymentRepository
    {
        #region Fields
        private readonly ProjectQEntities _context;
        #endregion

        #region Constructors

        public AnswerPaymentRepository(ProjectQEntities context)
        {
            _context = context;
        }
        #endregion

        #region Interface Implementations
        async Task IAnswerPaymentRepository.AddAsync(AnswerPayment answerPayment)
        {
            await _context.AnswerPayments.AddAsync(answerPayment);
        }

        #endregion
    }
}
