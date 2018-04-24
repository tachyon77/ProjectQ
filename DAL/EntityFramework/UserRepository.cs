using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using Microsoft.EntityFrameworkCore;

namespace ProjectQ.DAL.EntityFramework
{
    public class UserRepository : IUserRepository
    {
        #region Private Members
        private ProjectQEntities _context;
        #endregion

        public UserRepository(ProjectQEntities context)
        {
            _context = context;
        }

        async Task<User> IUserRepository.FindAsync(int userId)
        {
            var user = await _context.Users.FindAsync(userId);
            return user;
        }

        async Task IUserRepository.UpdateNameAsync(int id, string name)
        {
            var user = await _context.Users.FindAsync(id);
            user.Name = name;
        }

        async Task IUserRepository.UpdateIntroductionAsync(
            int id, string introduction)
        {
            var user = await _context.Users.FindAsync(id);
            user.Introduction = introduction;
        }

        async Task IUserRepository.AddAsync(User user)
        {
            await _context.Users.AddAsync(user);
        }

        User IUserRepository.FindByUniqueName(string uniqueName)
        {
            return _context.Users.SingleOrDefault(x=>x.UniqueName.Equals(uniqueName));
        }
    }
}
