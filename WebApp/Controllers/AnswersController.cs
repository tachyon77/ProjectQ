﻿using System;
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
    [Route("api/Answers")]
    public class AnswersController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IAnswerManager _AnswerManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="AnswerManager"></param>
        public AnswersController(
            IAnswerManager AnswerManager,
            UserManager<ApplicationUser> userManager
            )
        {
            _AnswerManager = AnswerManager;
            _userManager = userManager;
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

            await _AnswerManager.AddAsync(Answer, _userManager.GetUserId(User));

            return CreatedAtAction("GetAnswer", new { id = Answer.Id }, Answer);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> Update(long id, [FromBody] Answer updated)
        {
            if (updated == null || updated.Id != id)
            {
                return BadRequest();
            }
            await _AnswerManager.UpdateAsync(updated);

            return new NoContentResult();
        }

        private bool AnswerExists(int id)
        {
            return _AnswerManager.AnswerExists(id);
        }
    }
}