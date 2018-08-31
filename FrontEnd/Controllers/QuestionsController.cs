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

namespace FrontEnd.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
        private readonly UserManager<ApplicationUser> _aspUserManager;
        private readonly IQuestionManager _questionManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="questionManager"></param>
        public QuestionsController(
            IQuestionManager questionManager,
            UserManager<ApplicationUser> aspUserManager
            )
        {
            _questionManager = questionManager;
            _aspUserManager = aspUserManager;
        }
        // GET: api/Questions
        [HttpGet]
        async public Task<IEnumerable<UserSpecificQuestionPreview>> GetQuestions()
        {
            return  await _questionManager.GetAllForUserAsync(
                (await _aspUserManager.GetUserAsync(User)).UserId );
        }

        // GET: api/questions/my
        [HttpGet("my")]
        async public Task<IEnumerable<Question>> GetAllAskedByMe()
        {
            return await _questionManager.GetAllAskedByAsync(
                (await _aspUserManager.GetUserAsync(User)).UserId
            );
        }

        // GET: api/Questions/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetQuestion([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var question = await _questionManager.FindAsync(id);

            if (question == null)
            {
                return NotFound();
            }

            return Ok(question);
        }

        // POST: api/Questions
        [HttpPost]
        public async Task<IActionResult> PostQuestion([FromBody] Question question)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _questionManager.
                AddAsync(question, (await _aspUserManager.GetUserAsync(User)).UserId);

            return CreatedAtAction(
                "GetQuestion", 
                new { id = question.Id }, question);
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Question updated)
        {
            if (updated == null)
            {
                return BadRequest();
            }

            var userId = (await _aspUserManager.GetUserAsync(User)).UserId;

            await _questionManager.UpdateAsync(userId, updated);

            return new NoContentResult();
        }

        private bool QuestionExists(int id)
        {
            return _questionManager.QuestionExists(id);
        }
    }
}