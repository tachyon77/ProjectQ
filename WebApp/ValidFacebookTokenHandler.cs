using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Security.Claims;
using System.Threading.Tasks;

namespace WebApp.Authorization
{
    public class ValidFacebookTokenHandler : AuthorizationHandler<ValidFacebookAccessTokenRequirement>
    {
        protected override Task HandleRequirementAsync(
            AuthorizationHandlerContext context,
            ValidFacebookAccessTokenRequirement requirement)
        {
            var authFilterContext = context.Resource as AuthorizationFilterContext;

            Console.WriteLine(authFilterContext.HttpContext.Request.Headers.Count);
            
            context.Succeed(requirement);
           
            return Task.CompletedTask;
        }
    }
}
