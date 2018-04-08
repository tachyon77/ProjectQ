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
        async Task<UserProfile> IUserProfileManager.GetById(string id)
        {
            return await _unitOfWork.UserProfileRepository.GetByIdAsync(id);
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
