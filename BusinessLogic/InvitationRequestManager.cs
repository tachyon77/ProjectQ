using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using ProjectQ.DAL;
using ProjectQ.Model;
using ProjectQ.BusinessLogic.Services;

namespace ProjectQ.BusinessLogic
{
    public class InvitationRequestManager : IInvitationRequestManager
    {
        #region Fields
        private IUnitOfWork _unitOfWork;
        #endregion

        #region Cosntructors

        public InvitationRequestManager(
            IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        #endregion

        #region Interface Implementations

        async Task IInvitationRequestManager.AddAsync(InvitationRequest invitationRequest)
        {
            invitationRequest.Time = DateTime.UtcNow;
            await _unitOfWork.InvitationRequestRepository.AddAsync(invitationRequest);
            await _unitOfWork.SaveAsync();
        }

        #endregion

    }
}
