﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using Microsoft.EntityFrameworkCore;

namespace ProjectQ.DAL.EntityFramework
{
    public class EmploymentRepository : IEmploymentRepository
    {
        #region Private Members
        private ProjectQEntities _context;
        #endregion

        public EmploymentRepository(ProjectQEntities context)
        {
            _context = context;
        }

        IEnumerable<Employment> IEmploymentRepository.GetAllForUser(
            int id)
        {
            return _context.Employments.Where(x=>x.UserId.Equals(id));
        }

        async Task IEmploymentRepository.AddAsync(int id, Employment employment)
        {
            employment.UserId = id;
            await _context.Employments.AddAsync(employment);
        }

        async Task<Employment> IEmploymentRepository.FindAsync(int employmentId)
        {
            return await _context.Employments.FindAsync(employmentId);
        }

        async Task IEmploymentRepository.UpdateAsync(Employment employment)
        {
            var existingEmployment = await _context.Employments.FindAsync(employment.Id);

            existingEmployment.Company = employment.Company;
            existingEmployment.Position = employment.Position;
            existingEmployment.Start = employment.Start;
            existingEmployment.End = employment.End;
            existingEmployment.IsCurrent = employment.IsCurrent;
        }
    }
}
