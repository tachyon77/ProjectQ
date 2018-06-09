using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework
{
    public class InvitationRequestRepository : IInvitationRequestRepository
    {
        #region Fields
        private readonly ProjectQEntities _context;
        #endregion

        #region Constructors

        public InvitationRequestRepository(ProjectQEntities context)
        {
            _context = context;
        }
        #endregion

        #region Interface Implementations
        async Task IInvitationRequestRepository.AddAsync(InvitationRequest invitationRequest)
        {
            await _context.InvitationRequests.AddAsync(invitationRequest);
        }

        #endregion
    }
}
