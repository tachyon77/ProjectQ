﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using Microsoft.EntityFrameworkCore;

namespace ProjectQ.DAL.EntityFramework
{
    public class EducationRepository : IEducationRepository
    {
        #region Private Members
        private ProjectQEntities _context;
        #endregion

        public EducationRepository(ProjectQEntities context)
        {
            _context = context;
        }

        IEnumerable<Education> IEducationRepository.GetAllForUser(
            int id)
        {
            return _context.Educations.Where(x=>x.UserId.Equals(id));
        }

        async Task IEducationRepository.AddAsync(int id, Education educaiton)
        {
            educaiton.UserId = id;
            await _context.Educations.AddAsync(educaiton);
        }

        async Task IEducationRepository.UpdateAsync(Education education)
        {
            var existingEducation = await _context.Educations.FindAsync(education.Id);

            existingEducation.School = education.School;
            existingEducation.Concentration = education.Concentration;
            existingEducation.SecondaryConcentration = education.SecondaryConcentration;
            existingEducation.DegreeType = education.DegreeType;
            existingEducation.GraduationYear = education.GraduationYear;

        }

        async Task<Education> IEducationRepository.FindAsync(int educationId)
        {
            return await _context.Educations.FindAsync(educationId);
        }
    }
}
