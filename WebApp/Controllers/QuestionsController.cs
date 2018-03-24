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

namespace WebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IQuestionManager _questionManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="questionManager"></param>
        public QuestionsController(
            IQuestionManager questionManager,
            UserManager<ApplicationUser> userManager
            )
        {
            _questionManager = questionManager;
            _userManager = userManager;
        }
        // GET: api/Questions
        [HttpGet]
        async public Task<IEnumerable<QuestionPreview>> GetQuestions()
        {
            return  await _questionManager.GetAllForUser(
                await _userManager.GetUserAsync(User)
                );
        }

        // GET: api/questions/my
        [HttpGet("my")]
        async public Task<IEnumerable<Question>> GetAllAskedByMe()
        {
            return await _questionManager.GetAllAskedBy(
                await _userManager.GetUserAsync(User)
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

            var question = await _questionManager.GetByIdAsync(id);

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
                AddAsync(question, _userManager.GetUserId(User));

            return CreatedAtAction(
                "GetQuestion", 
                new { id = question.Id }, question);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(long id, [FromBody] Question updated)
        {
            if (updated == null || updated.Id != id)
            {
                return BadRequest();
            }

            var email = User.Claims.Where(c => c.Type == ClaimTypes.Email)
                   .Select(c => c.Value).SingleOrDefault();

            await _questionManager.UpdateAsync(updated, email);

            return new NoContentResult();
        }

        private bool QuestionExists(int id)
        {
            return _questionManager.QuestionExists(id);
        }
    }
}