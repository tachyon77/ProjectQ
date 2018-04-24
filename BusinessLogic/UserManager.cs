using System;
using System.Threading.Tasks;
using ProjectQ.DAL;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public class UserManager : IUserManager
    {
        #region Private Members
        private IUnitOfWork _unitOfWork;
        #endregion

        #region Public Members
        public UserManager(
            IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        async Task IUserManager.UpdateIntroductionAsync(
            int id, 
            string introduction)
        {
            await _unitOfWork.UserRepository
                .UpdateIntroductionAsync(id, introduction);
            await _unitOfWork.SaveAsync();
        }

        async Task<User> IUserManager.FindAsync(int id)
        {
            return await _unitOfWork.UserRepository.FindAsync(id);
        }

        async Task IUserManager.UpdateNameAsync(int id, string name)
        {
            await _unitOfWork.UserRepository.UpdateNameAsync(id, name);
            await _unitOfWork.SaveAsync();
        }

        async Task<User> IUserManager.AddAsync(string name)
        {
            var dashedName = name.Replace(' ', '-').ToLower();
            var uniqueName = dashedName;

            var isAlreadyUsed = _unitOfWork.UserRepository.FindByUniqueName(dashedName) != null;

            int i = 2;
            while (isAlreadyUsed)
            {
                uniqueName = dashedName + i.ToString();
                isAlreadyUsed = _unitOfWork.UserRepository.FindByUniqueName(uniqueName) != null;
            };

            var newUser = new User()
            {
                Name = name,
                UniqueName = uniqueName,
            };

            await _unitOfWork.UserRepository.AddAsync(newUser);
            await _unitOfWork.SaveAsync();

            return newUser;
        }

        #endregion
    }
}
