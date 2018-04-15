using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ProjectQ.Model;
using ProjectQ.WebApp.Services;

namespace ProjectQ.WebApp.Controllers
{
    public class LoginCredential
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class RegistrationForm
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmEmailCode { get; set; }
    }

    [Produces("application/json")]
    [Route("api/Account")]
    public class AccountController : Controller
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IEmailSender _emailSender;

        public AccountController(
            SignInManager<ApplicationUser> signInManager,
            IEmailSender emailSender
            )
        {
            _signInManager = signInManager;
            _emailSender = emailSender;
        }

        [HttpGet("username")]
        public string
           GetUserName()
        {
            return _signInManager.UserManager.GetUserName(User);
        }


        [HttpPost]
        public async Task<IActionResult> PostAccount([FromBody] LoginCredential data)
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


        private string EmailConfirmationLink(IUrlHelper urlHelper, string userId, string code, string scheme)
        {
            return urlHelper.Page(
                "/Account/ConfirmEmail",
                pageHandler: null,
                values: new { userId, code },
                protocol: scheme);
        }

        [HttpGet("register")]
        public async Task<IActionResult> Confirm(string userId, string code)
        {
            var user = await _signInManager.UserManager.FindByIdAsync(userId);
            await _signInManager.UserManager.ConfirmEmailAsync(user, code);
            return Redirect("/home");
        }


        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegistrationForm data)
        {
     
            var user = new ApplicationUser {
                UserName = data.Email, Email = data.Email,
                FirstName = "dummy"
            };
            var result = await _signInManager
                .UserManager
                .CreateAsync(user, data.Password);

            if (result.Succeeded)
            {
                var userManager = _signInManager.UserManager;

                var code = await userManager.GenerateEmailConfirmationTokenAsync(user);
                var callbackUrl = EmailConfirmationLink(Url, user.Id, code, Request.Scheme);
                await _emailSender.SendEmailAsync(
                    data.Email,
                    "Confirm registration",
                    "Click <a href=" + callbackUrl + ">here</a> to confirm your registration.");
                return Ok("Account created. Need email confirmation to active account.");
            }
          
            
            return Ok(false);
        }
    }
}
