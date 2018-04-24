using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.DAL;
using ProjectQ.Model;
using ProjectQ.BusinessLogic.Services;

namespace ProjectQ.BusinessLogic
{
    public class CredentialsManager : ICredentialsManager
    {
        #region Private Members
        private IUnitOfWork _unitOfWork;
        #endregion

        #region Public Members

        public CredentialsManager(
            IUnitOfWork unitOfWork
            )
        {
            _unitOfWork = unitOfWork;
        }

        Credentials ICredentialsManager.GetForUser(int id)
        {
            var credentials = new Credentials();

            credentials.Educations = 
                _unitOfWork.EducationRepository.GetAllForUser(id);

            credentials.Employments =
                _unitOfWork.EmploymentRepository.GetAllForUser(id);

            return credentials;
        }

        async Task ICredentialsManager.AddEducationAsync(int userId, Education education)
        {
            await _unitOfWork.EducationRepository.AddAsync(userId, education);
            await _unitOfWork.SaveAsync();
        }

        async Task ICredentialsManager.AddEmploymentAsync(int userId, Employment employment)
        {
            await _unitOfWork.EmploymentRepository.AddAsync(userId, employment);
            await _unitOfWork.SaveAsync();
        }

        async Task ICredentialsManager.UpdateEducationAsync(int userId, Education education)
        {
            var existingRecord =
                await _unitOfWork.EducationRepository.FindAsync(education.Id);

            if (!existingRecord.UserId.Equals(existingRecord.UserId))
            {
                throw new Exception("Unauthorized");
            }
            await _unitOfWork.EducationRepository.UpdateAsync(education);
            await _unitOfWork.SaveAsync();
        }

        async Task ICredentialsManager.UpdateEmploymentAsync(int userId, Employment employment)
        {
            var existingRecord =
                await _unitOfWork.EmploymentRepository.FindAsync(employment.Id);

            if (!existingRecord.UserId.Equals(existingRecord.UserId))
            {
                throw new Exception("Unauthorized");
            }
            await _unitOfWork.EmploymentRepository.UpdateAsync(employment);
            await _unitOfWork.SaveAsync();
        }
        #endregion
    }
}
