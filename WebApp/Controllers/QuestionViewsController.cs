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
        private readonly IUserIdProvider _userIdProvider;
        private readonly IQuestionViewManager _questionViewManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="questionViewManager"></param>
        public QuestionViewsController(
            IQuestionViewManager questionViewManager,
            IUserIdProvider userIdProvider
            )
        {
            _questionViewManager = questionViewManager;
            _userIdProvider = userIdProvider;
        }


        // POST: api/QuestionViews
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] QuestionView questionView)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            questionView.UserId = await _userIdProvider.GetUserIdAsync();

            await _questionViewManager.AddAsync(questionView);

            return NoContent();
        }
    }
}