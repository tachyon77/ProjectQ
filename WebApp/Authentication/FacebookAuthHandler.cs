using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using ProjectQ.BusinessLogic;

namespace ProjectQ.WebApp.Authentication
{
    internal class FacebookAuthHandler : AuthenticationHandler<FacebookAuthOptions>
    {
        private readonly IUserManager _userManager;

        public FacebookAuthHandler(
            IUserManager userManager,
            IOptionsMonitor<FacebookAuthOptions> options, 
            ILoggerFactory logger, UrlEncoder encoder, 
            ISystemClock clock) : base(options, logger, encoder, clock)
        {
            _userManager = userManager;
        }

        private void AddIfNecessary(FacebookUser user)
        {
            if (!_userManager.UserExists(user.Email))
            {
                _userManager.AddAsync(new Model.User()
                {
                    email = user.Email,
                    FirstName = user.Name,
                    LastName = "",                
                });
            }
        }
        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            // The auth key from Authorization header check against the configured one

            var accessToken = Context.Request.Headers["Authorization"];

            List<ClaimsIdentity> identities;
            AuthenticationTicket ticket;

            if (!String.IsNullOrWhiteSpace(accessToken))
            {
                var userInfo = Options.Authenticator.GetUserInfo(accessToken);

                var ci = new ClaimsIdentity("Facebook");

                ci.AddClaim(
                    new Claim(
                        ClaimTypes.Email, userInfo.Email, 
                        ClaimValueTypes.Email));

                // Create authenticated user
                identities = new List<ClaimsIdentity> { ci };                  

                ticket = new AuthenticationTicket(
                    new ClaimsPrincipal(identities), "Facebook Auth");

                AddIfNecessary(userInfo);

                return await Task.FromResult(AuthenticateResult.Success(ticket));
            }

            return await Task.FromResult(AuthenticateResult.Fail(new Exception("Need to login")));
        }
    }
}
