using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace ProjectQ.WebApp.Authentication
{
    internal class FacebookAuthHandler : AuthenticationHandler<FacebookAuthOptions>
    {
        public FacebookAuthHandler(IOptionsMonitor<FacebookAuthOptions> options, ILoggerFactory logger, UrlEncoder encoder, ISystemClock clock) : base(options, logger, encoder, clock)
        {
            // store custom services here...
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

                return await Task.FromResult(AuthenticateResult.Success(ticket));
            }

            identities = new List<ClaimsIdentity> { new ClaimsIdentity("None") };
            ticket = new AuthenticationTicket(new ClaimsPrincipal(identities), "None");

            return await Task.FromResult(AuthenticateResult.Success(ticket));
        }
    }
}
