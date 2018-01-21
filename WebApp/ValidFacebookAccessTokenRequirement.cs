using Microsoft.AspNetCore.Authorization;


namespace WebApp.Authorization
{
    public class ValidFacebookAccessTokenRequirement : IAuthorizationRequirement
    {

        public ValidFacebookAccessTokenRequirement()
        {
        }
    }
}
