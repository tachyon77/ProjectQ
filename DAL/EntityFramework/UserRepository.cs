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
        private ProjectQEntities Context;
        #endregion

        public UserRepository(ProjectQEntities context)
        {
            Context = context;
        }
        async Task IUserRepository.AddUser(User user)
        {
            Context.Users.Add(user);
            await Context.SaveChangesAsync();
        }
    }
}
