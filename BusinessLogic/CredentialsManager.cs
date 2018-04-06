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

        Credentials ICredentialsManager.GetForUser(ApplicationUser user)
        {
            var credentials = new Credentials();

            credentials.Educations = 
                _unitOfWork.EducationRepository.GetAllForUser(user);

            credentials.Employments =
                _unitOfWork.EmploymentRepository.GetAllForUser(user);

            return credentials;
        }



        #endregion
    }
}
