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
            return await _context.Users.FindAsync(userId);
        }

        async Task IUserRepository.UpdateAsync(int id, User updated)
        {
            var user = await _context.Users.FindAsync(id);
            user.Name = updated.Name;
            user.UniqueName = updated.UniqueName;
            user.Introduction = updated.Introduction;
        }

        async Task IUserRepository.AddAsync(User user)
        {
            await _context.Users.AddAsync(user);
        }

        User IUserRepository.FindByUniqueName(string uniqueName)
        {
            return _context.Users.FirstOrDefault(x=>x.UniqueName.Equals(uniqueName));
        }
    }
}
