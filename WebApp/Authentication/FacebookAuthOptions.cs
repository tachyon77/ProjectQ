using Microsoft.AspNetCore.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectQ.WebApp.Authentication
{
    public class FacebookAuthOptions : AuthenticationSchemeOptions
    {
        public FacebookGraphApiClient Authenticator { get; set; }
        public FacebookAuthOptions()
        {
        }
    }
}
