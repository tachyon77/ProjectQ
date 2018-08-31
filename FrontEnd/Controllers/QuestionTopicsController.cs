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
using ProjectQ.FrontEnd.Services;

namespace FrontEnd.Controllers
{
    [Produces("application/json")]
    [Route("api/QuestionTopics")]
    public class QuestionTopicsController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IQuestionTopicManager _questionTopicManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="questionTopicManager"></param>
        public QuestionTopicsController(
            IQuestionTopicManager questionTopicManager,
            UserManager<ApplicationUser> userManager
            )
        {
            _questionTopicManager = questionTopicManager;
            _userManager = userManager;
        }


        // POST: api/QuestionViews
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] QuestionTopic questionTopic)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _questionTopicManager
                .AddAsync(questionTopic.QuestionId, questionTopic.TopicId);

            return NoContent();
        }
    }
}