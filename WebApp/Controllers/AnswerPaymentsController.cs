using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectQ.Model;
using ProjectQ.BusinessLogic;
using Microsoft.AspNetCore.Identity;

namespace WebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/AnswerPayments")]
    public class AnswerPaymentsController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IAnswerPaymentManager _answerPaymentManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="answerPaymentManager"></param>
        public AnswerPaymentsController(
            IAnswerPaymentManager answerPaymentManager,
            UserManager<ApplicationUser> userManager
            )
        {
            _answerPaymentManager = answerPaymentManager;
            _userManager = userManager;
        }

        // POST: api/AnswerPayments
        [HttpPost]
        public async Task<AnswerPaymentStatus> Post([FromBody] AnswerPayment answerPayment)
        {
            answerPayment.UserId = (await _userManager.GetUserAsync(User)).UserId;
            AnswerPaymentStatus status = 
                await _answerPaymentManager.ProcessPaymentAsync(answerPayment);

            return status;
        }

    }
}