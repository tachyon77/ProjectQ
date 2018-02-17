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


        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegistrationForm data)
        {
     
            var user = new ApplicationUser { UserName = data.Email, Email = data.Email };
            var result = await _signInManager
                .UserManager
                .CreateAsync(user, data.Password);

            await _emailSender.SendEmailAsync(
                data.Email, "Confirm your email", "This is the code");
                
            if (result.Succeeded)
            {
                var code = await _signInManager
                    .UserManager
                    .GenerateEmailConfirmationTokenAsync(user);

                await _emailSender.SendEmailAsync("", "", "");

                await _signInManager.SignInAsync(user, isPersistent: false);
                return Ok();
            }
          
            
            return Ok(false);
        }
    }
}
