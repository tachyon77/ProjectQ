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

        Credentials ICredentialsManager.GetForUser(string id)
        {
            var credentials = new Credentials();

            credentials.Educations = 
                _unitOfWork.EducationRepository.GetAllForUser(id);

            credentials.Employments =
                _unitOfWork.EmploymentRepository.GetAllForUser(id);

            return credentials;
        }

        async Task ICredentialsManager.AddEducationAsync(string id, Education education)
        {
            await _unitOfWork.EducationRepository.AddEducationAsync(id, education);
            await _unitOfWork.SaveAsync();
        }

        async Task ICredentialsManager.AddEmploymentAsync(string id, Employment employment)
        {
            await _unitOfWork.EmploymentRepository.AddEmploymentAsync(id, employment);
            await _unitOfWork.SaveAsync();
        }

        async Task ICredentialsManager.UpdateEducationAsync(string userId, Education education)
        {
            var existingRecord =
                await _unitOfWork.EducationRepository.FindEducationAsync(education.Id);

            if (!existingRecord.AspNetUserId.Equals(existingRecord.AspNetUserId))
            {
                throw new Exception("Unauthorized");
            }
            await _unitOfWork.EducationRepository.UpdateEducationAsync(education);
            await _unitOfWork.SaveAsync();
        }

        async Task ICredentialsManager.UpdateEmploymentAsync(string userId, Employment employment)
        {
            var existingRecord =
                await _unitOfWork.EmploymentRepository.FindEmploymentAsync(employment.Id);

            if (!existingRecord.AspNetUserId.Equals(existingRecord.AspNetUserId))
            {
                throw new Exception("Unauthorized");
            }
            await _unitOfWork.EmploymentRepository.UpdateEmploymentAsync(employment);
            await _unitOfWork.SaveAsync();
        }
        #endregion
    }
}
