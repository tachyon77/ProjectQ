using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ProjectQ.Model;

namespace ProjectQ.WebApp.Services
{
    public interface IUserIdProvider
    {
        Task<int> GetUserIdAsync();
    }

    public class AspUserIdProvider: Controller, IUserIdProvider
    {
        private readonly UserManager<ApplicationUser> _aspUserManager;

        public AspUserIdProvider(
            UserManager<ApplicationUser> aspUserManager
            )
        {
            _aspUserManager = aspUserManager;
        }

        async Task<int> IUserIdProvider.GetUserIdAsync()
        {
            return (await _aspUserManager.GetUserAsync(User)).UserId;
        }
    }
}
