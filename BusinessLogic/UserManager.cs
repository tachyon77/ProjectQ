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

        async Task<User> IUserManager.FindAsync(int id)
        {
            return await _unitOfWork.UserRepository.FindAsync(id);
        }

        async Task IUserManager.UpdateAsync(int id, User updated)
        {
            var current = await _unitOfWork.UserRepository.FindAsync(id);
            if (!current.Name.Equals(updated.Name))
            {
                updated.UniqueName = computeUniqueName(updated.Name);
            }
            await _unitOfWork.UserRepository.UpdateAsync(id, updated);
            await _unitOfWork.SaveAsync();
        }

        string computeUniqueName(string name)
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

            return uniqueName;
        }

        async Task<User> IUserManager.AddAsync(string name)
        {
            var newUser = new User()
            {
                Name = name,
                UniqueName = computeUniqueName(name),
                Introduction = "",
            };

            await _unitOfWork.UserRepository.AddAsync(newUser);
            await _unitOfWork.SaveAsync();

            return newUser;
        }

        User IUserManager.FindByUniqueName(string uniqueName)
        {
            return _unitOfWork.UserRepository.FindByUniqueName(uniqueName);
        }

        #endregion
    }
}
