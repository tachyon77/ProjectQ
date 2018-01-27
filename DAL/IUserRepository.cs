﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IUserRepository
    {
        Task AddAsync(User user);
        bool UserExists(string email);
        User GetByEmail(string email);
    }
}
