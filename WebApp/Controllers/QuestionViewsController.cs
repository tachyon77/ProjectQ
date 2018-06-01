using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectQ.Model;
using ProjectQ.BusinessLogic;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using ProjectQ.WebApp.Services;

namespace WebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/QuestionViews")]
    public class QuestionViewsController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IQuestionViewManager _questionViewManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="questionViewManager"></param>
        public QuestionViewsController(
            IQuestionViewManager questionViewManager,
            UserManager<ApplicationUser> userManager
            )
        {
            _questionViewManager = questionViewManager;
            _userManager = userManager;
        }


        // POST: api/QuestionViews
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] int questionId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            int userId = (await _userManager.GetUserAsync(User)).UserId;

            await _questionViewManager.AddAsync(questionId, userId);

            return NoContent();
        }
    }
}