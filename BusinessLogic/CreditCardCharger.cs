using System;
using System.Collections.Generic;
using System.Text;
using Stripe;
using ProjectQ.Model;
using Microsoft.Extensions.Configuration;

namespace ProjectQ.BusinessLogic
{
    public class StripeCharger : ICreditCardCharger
    {
        private string APIKey { get; set; }
        public StripeCharger(IConfiguration configuration)
        {
            // Set your secret key: remember to change this to your live secret key in production
            // See your keys here: https://dashboard.stripe.com/account/apikeys
            APIKey = configuration.GetValue<string>("STRIPE_API_KEY");
            StripeConfiguration.SetApiKey(APIKey);
        }

        // Token is created using Checkout or Elements.
        // Get the payment token submitted by the form:

        AnswerPaymentStatus ICreditCardCharger.CreateCharge(
            int amount, string description, int userId, string token)
        {
            AnswerPaymentStatus status = new AnswerPaymentStatus();

            var options = new StripeChargeCreateOptions
            {
                Amount = amount * 100,
                Currency = "usd",
                Description = description,
                SourceTokenOrExistingSourceId = token,
            };
            var service = new StripeChargeService(APIKey);

            try
            {
                StripeCharge charge = service.Create(options);
                status.IsSuccessful = true;
            }
            catch (StripeException e)
            {
                status.IsSuccessful = false;
                status.ErrorMessage = e.StripeError.ErrorType;
                switch (e.StripeError.ErrorType)
                {
                    // TODO: Handle error properly.
                    case "card_error":
                        Console.WriteLine("   Code: " + e.StripeError.Code);
                        Console.WriteLine("Message: " + e.StripeError.Message);
                        break;
                    case "api_connection_error":
                        break;
                    case "api_error":
                        break;
                    case "authentication_error":
                        break;
                    case "invalid_request_error":
                        break;
                    case "rate_limit_error":
                        break;
                    case "validation_error":
                        break;
                    default:
                        // Unknown Error Type
                        break;
                }
            }

            return status;
        }
    }
}
