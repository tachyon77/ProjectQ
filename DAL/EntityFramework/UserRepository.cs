using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.DAL;
using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework
{
    public class UserRepository:IUserRepository
    {
        #region Private Members
        private ProjectQEntities _context;
        #endregion

        public UserRepository(ProjectQEntities context)
        {
            _context = context;
        }
        async Task IUserRepository.AddAsync(User user)
        {
            await _context.Users.AddAsync(user);
        }

        User IUserRepository.GetByEmail(string email)
        {
            email = email.ToLower().Trim();
            return _context.Users.First(x=>x.email.ToLower().Equals(email));
        }

        bool IUserRepository.UserExists(string email)
        {
            return _context.Users.Any(x => x.email.Equals(email));
        }
    }
}
