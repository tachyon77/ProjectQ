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
    [Route("api/PurchasedAnswers")]
    public class PurchasedAnswersController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IPurchaseAnswerManager _purchasedAnswerManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="AnswerManager"></param>
        public PurchasedAnswersController(
            IPurchaseAnswerManager purchaseAnswerManager,
            UserManager<ApplicationUser> userManager
            )
        {
            _purchasedAnswerManager = purchaseAnswerManager;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<IEnumerable<PurchasedAnswerView>> Get()
        {
            int userId = (await _userManager.GetUserAsync(User)).UserId;
            return await _purchasedAnswerManager.GetForUserAsync(userId);
        }

        // POST: api/PurchasedAnswers
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] int answerId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _purchasedAnswerManager.PurchaseAsync
            (
                answerId,
                (await _userManager.GetUserAsync(User)).UserId,
                0
            );

            return NoContent();
        }

    }
}