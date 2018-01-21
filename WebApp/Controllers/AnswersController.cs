using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectQ.Model;
using ProjectQ.BusinessLogic;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace WebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Answers")]
    public class AnswersController : Controller
    {
        private readonly IAnswerManager _AnswerManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="AnswerManager"></param>
        public AnswersController(
            IAnswerManager AnswerManager)
        {
            _AnswerManager = AnswerManager;
        }
        // GET: api/Answers
        [HttpGet]
        public IEnumerable<Answer> GetAnswers()
        {
            throw new NotImplementedException();
        }

        [HttpGet("ForQuestion/{questionId}")]
        public async Task<IEnumerable<Answer>> 
            GetForQuestion([FromRoute] int questionId)
        {
            return await _AnswerManager.GetForQuestionAsync(questionId);
        }


        // GET: api/Answers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAnswer([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Answer = await _AnswerManager.GetById(id);

            if (Answer == null)
            {
                return NotFound();
            }

            return Ok(Answer);
        }

        // POST: api/Answers
        [HttpPost]
        public async Task<IActionResult> PostAnswer([FromBody] Answer Answer)
        {           
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var email = User.Claims.Where(c => c.Type == ClaimTypes.Email)
                   .Select(c => c.Value).SingleOrDefault();

            await _AnswerManager.AddAsync(Answer, email);

            return CreatedAtAction("GetAnswer", new { id = Answer.Id }, Answer);
        }

        private bool AnswerExists(int id)
        {
            return _AnswerManager.AnswerExists(id);
        }
    }
}