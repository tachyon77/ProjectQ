using Microsoft.AspNetCore.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectQ.WebApp.Authentication
{
    public static class FacebookAuthExtensions
    {
        public static AuthenticationBuilder AddCustomAuth(this AuthenticationBuilder builder, Action<FacebookAuthOptions> configureOptions)
        {
            return builder.AddScheme<FacebookAuthOptions, FacebookAuthHandler>("Facebook Auth", "Facebook Auth", configureOptions);
        }
    }
}
