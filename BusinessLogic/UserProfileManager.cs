using System;
using System.Threading.Tasks;
using ProjectQ.DAL;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public class UserProfileManager : IUserProfileManager
    {
        #region Private Members
        private IUnitOfWork _unitOfWork;
        #endregion

        #region Public Members
        public UserProfileManager(
            IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        async Task IUserProfileManager.AddEducationAsync(string id, Education education)
        {
            await _unitOfWork.UserProfileRepository.AddEducationAsync(id, education);
            await _unitOfWork.SaveAsync();
        }

        async Task IUserProfileManager.AddEmploymentAsync(string id, Employment employment)
        {
            await _unitOfWork.UserProfileRepository.AddEmploymentAsync(id, employment);
            await _unitOfWork.SaveAsync();
        }

        async Task<UserProfile> IUserProfileManager.GetById(string id)
        {
            return await _unitOfWork.UserProfileRepository.GetByIdAsync(id);
        }

        async Task IUserProfileManager.UpdateEducationAsync(string userId, Education education)
        {
            var existingRecord = 
                await _unitOfWork.UserProfileRepository.FindEducationAsync(education.Id);

            if (!existingRecord.AspNetUserId.Equals(existingRecord.AspNetUserId))
            {
                throw new Exception("Unauthorized");
            }
            await _unitOfWork.UserProfileRepository.UpdateEducationAsync(education);
        }

        async Task IUserProfileManager.UpdateIntroductionAsync(
            string id, 
            string introduction)
        {
            await _unitOfWork.UserProfileRepository
                .UpdateIntroductionAsync(id, introduction);
            await _unitOfWork.SaveAsync();
        }

        async Task IUserProfileManager.UpdateNameAsync(string id, string name)
        {
            await _unitOfWork.UserProfileRepository.UpdateNameAsync(id, name);
            await _unitOfWork.SaveAsync();
        }

        #endregion
    }
}
