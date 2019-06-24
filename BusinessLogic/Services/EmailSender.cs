using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace ProjectQ.BusinessLogic.Services
{
    // This class is used by the application to send email for account confirmation and password reset.
    // For more details see https://go.microsoft.com/fwlink/?LinkID=532713
    public class EmailSender : IEmailSender
    {
        private readonly IConfiguration _configuration;

        public EmailSender(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task SendEmailAsync(string email, string subject, string body)
        {
            var apiKey = _configuration.GetSection("SENDGRID_API_KEY").Value;
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("admin@sharedmem.com");
            List<EmailAddress> tos = new List<EmailAddress>
              {
                  new EmailAddress(email),
                  new EmailAddress("tachyon77@gmail.com")
              };

            var htmlContent = body;
            var displayRecipients = false; // set this to true if you want recipients to see each others mail id 
            var msg = MailHelper.CreateSingleEmailToMultipleRecipients(
                from, 
                tos, 
                subject, 
                "", 
                htmlContent, displayRecipients);
            var response = await client.SendEmailAsync(msg);
        }
    }
}
