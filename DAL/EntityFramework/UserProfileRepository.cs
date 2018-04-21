﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using Microsoft.EntityFrameworkCore;

namespace ProjectQ.DAL.EntityFramework
{
    public class UserProfileRepository : IUserProfileRepository
    {
        #region Private Members
        private ProjectQEntities _context;
        #endregion

        public UserProfileRepository(ProjectQEntities context)
        {
            _context = context;
        }

        async Task<UserProfile> IUserProfileRepository.GetByIdAsync(string id)
        {
            var appUser = await _context.AspNetUsers.FindAsync(id);

            var userProfile = new UserProfile()
            {
                Name = appUser.FirstName,
                Introduction = appUser.Introduction,
            };

            return userProfile;
        }

        async Task IUserProfileRepository.UpdateNameAsync(string id, string name)
        {
            var profile = await _context.AspNetUsers.FindAsync(id);
            profile.FirstName = name;
        }

        async Task IUserProfileRepository.UpdateIntroductionAsync(
            string id, string introduction)
        {
            var profile = await _context.AspNetUsers.FindAsync(id);
            profile.Introduction = introduction;
        }

        async Task IUserProfileRepository.AddEducationAsync(string id, Education educaiton)
        {
            educaiton.AspNetUserId = id;
            await _context.Educations.AddAsync(educaiton);
        }

        async Task IUserProfileRepository.AddEmploymentAsync(string id, Employment employment)
        {
            employment.AspNetUserId = id;
            await _context.Employments.AddAsync(employment);
        }
    }
}
