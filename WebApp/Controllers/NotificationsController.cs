using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectQ.Model;
using ProjectQ.BusinessLogic;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using System.Net.WebSockets;

namespace WebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Notifications")]
    public class NotificationsController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly INotificationManager _notificationManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="questionManager"></param>
        public NotificationsController(
            INotificationManager notificationManager,
            UserManager<ApplicationUser> userManager
            )
        {
            _notificationManager = notificationManager;
            _userManager = userManager;
        }
        // GET: api/Notifications
        [HttpGet("unseen")]
        async public Task<IEnumerable<Notification>> GetUnseen()
        {
            return  await _notificationManager
                .GetForUserAsync(
                _userManager.GetUserId(User));
        }

        // GET: api/Notifications/ws
        [HttpGet("ws")]
        async public Task GetWs()
        {
            var context = Request.HttpContext;
            if (context.WebSockets.IsWebSocketRequest)
            {
                WebSocket webSocket = await context.WebSockets.AcceptWebSocketAsync();
                Console.WriteLine(webSocket.ToString());
            }
            else
            {
                context.Response.StatusCode = 400;
            }
        }
    }
}