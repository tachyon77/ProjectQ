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
        void IUserRepository.AddUser(User user)
        {
            _context.Users.Add(user);
        }
    }
}
