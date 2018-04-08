using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectQ.Model;
using ProjectQ.BusinessLogic;
using ProjectQ.BusinessLogic.Services;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using System.Net.WebSockets;
using System.Text;
using System.Threading;

namespace WebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Notifications")]
    public class NotificationsController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly INotificationManager _notificationManager;
        private readonly INotificationSender _notificationSender;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="questionManager"></param>
        public NotificationsController(
            INotificationManager notificationManager,
            UserManager<ApplicationUser> userManager,
            INotificationSender notificationSender
            )
        {
            _notificationManager = notificationManager;
            _userManager = userManager;
            _notificationSender = notificationSender;
        }
        // GET: api/Notifications
        [HttpGet("unseen")]
        async public Task<IEnumerable<Notification>> GetUnseen()
        {
            return  await _notificationManager
                .GetForUserAsync(
                _userManager.GetUserId(User));
        }

        // POST: api/Notifications
        [HttpPost("markseen")]
        async public Task MarkSeen([FromBody] int id)
        {
            await _notificationManager.MarkSeenAsync(id);
        }

        // GET: api/Notifications/ws
        [HttpGet("ws")]
        async public Task GetWs()
        {
            var context = Request.HttpContext;
            if (context.WebSockets.IsWebSocketRequest)
            {
                var webSocket = await context.WebSockets.AcceptWebSocketAsync();
                _notificationSender.Subscribe(
                    _userManager.GetUserId(User), webSocket);

                var data = "ping";
                var encoded = Encoding.UTF8.GetBytes(data);
                var buffer = new ArraySegment<Byte>(
                    encoded, 0, encoded.Length);

                while (!context.RequestAborted.IsCancellationRequested)
                {
                    await webSocket.SendAsync(
                        buffer, WebSocketMessageType.Text,
                        true,
                        CancellationToken.None);

                    Thread.Sleep(30000);
                }
                _notificationSender.Unsubscribe(
                    _userManager.GetUserId(User), webSocket);
            }
            else
            {
                context.Response.StatusCode = 400;
            }
        }
    }
}