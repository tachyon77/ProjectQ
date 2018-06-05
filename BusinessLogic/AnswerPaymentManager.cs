using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using ProjectQ.DAL;
using ProjectQ.Model;
using ProjectQ.BusinessLogic.Services;

namespace ProjectQ.BusinessLogic
{
    public class AnswerPaymentManager : IAnswerPaymentManager
    {
        #region Fields
        private IUnitOfWork _unitOfWork;
        private ICreditCardCharger _creditCardCharger;
        #endregion

        #region Cosntructors

        public AnswerPaymentManager(
            IUnitOfWork unitOfWork,
            ICreditCardCharger creditCardCharger,
            IAnswerDraftManager answerDraftManager)
        {
            _unitOfWork = unitOfWork;
            _creditCardCharger = creditCardCharger;
        }

        #endregion

        #region Interface Implementations

        async Task<AnswerPaymentStatus> IAnswerPaymentManager.ProcessPaymentAsync(AnswerPayment answerPayment)
        {
            AnswerPaymentStatus paymentStatus = 
                _creditCardCharger.CreateCharge(
                    answerPayment.Amount,
                    "Purchase Answer",
                    answerPayment.UserId,
                    answerPayment.Token);

            if (paymentStatus.IsSuccessful)
            {
                answerPayment.Time = DateTime.UtcNow;
                await _unitOfWork.AnswerPaymentRepository.AddAsync(answerPayment);
                await _unitOfWork.SaveAsync();                
            }

            return paymentStatus;
        }

        #endregion

    }
}
