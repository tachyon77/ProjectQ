﻿using System;
using Microsoft.AspNetCore.Identity;

namespace ProjectQ.Model
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        public int UserId { get; set; }
    }
}