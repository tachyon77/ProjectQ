﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ProjectQ.Model;

namespace ProjectQ.WebApp.Controllers
{
    public class LoginForm
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    [Produces("application/json")]
    [Route("api/Account")]
    public class AccountController : Controller
    {
        private readonly SignInManager<ApplicationUser> _signInManager;

        public AccountController(
            SignInManager<ApplicationUser> signInManager)
        {
            _signInManager = signInManager;
        }

        [HttpGet("username")]
        public string
           GetUserName()
        {
            return _signInManager.UserManager.GetUserName(User);
        }


        [HttpPost]
        public async Task<IActionResult> PostAccount([FromBody] LoginForm data)
        {
            if (ModelState.IsValid)
            {
                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                var result = await _signInManager
                    .PasswordSignInAsync(data.Email, data.Password, true, false);
                if (result.Succeeded)
                {
                    return Ok(data.Email);
                }
                else
                {
                    return Ok("");
                }
            }
            return Ok(false);
        }

        [HttpGet("refreshtoken")]
        public IActionResult GetRefreshToken()
        {
            return Ok();
        }


        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Ok();
        }
    }
}