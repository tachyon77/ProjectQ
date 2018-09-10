using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectQ.Model;
using ProjectQ.BusinessLogic;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;

namespace FrontEnd.Controllers
{
    [Produces("application/json")]
    [Route("api/InvitationRequests")]
    [AllowAnonymous]
    public class InvitationRequestsController : Controller
    {
        private readonly IInvitationRequestManager _invitationRequestManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="invitationRequestManager"></param>
        public InvitationRequestsController(
            IInvitationRequestManager invitationRequestManager
            )
        {
            _invitationRequestManager = invitationRequestManager;
        }

        // POST: api/InvitationRequests
        [HttpPost]
        public async Task Post([FromBody] InvitationRequest invitationRequest)
        {
            invitationRequest.IP = "0.0.0.0";
            await _invitationRequestManager.AddAsync(invitationRequest);
        }

    }
}