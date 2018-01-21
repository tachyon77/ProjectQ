using System;
using System.Net;
using System.IO;
using Newtonsoft.Json;

namespace ProjectQ.WebApp.Authentication
{
    public class FacebookGraphApiClient
    {
        public FacebookUser GetUserInfo(string accessToken)
        {
            string url = "https://graph.facebook.com/me?fields=name,email";

            try
            {
                using (var client = new WebClient())
                {
                    client.Headers.Add("Authorization", "Bearer " + accessToken);

                    using (var data = client.OpenRead(url))
                    {
                        using (var reader = new StreamReader(data))
                        {
                            string json = reader.ReadToEnd();
                            FacebookUser userInfo =
                                JsonConvert.DeserializeObject<FacebookUser>(json);
                            return userInfo;
                        }
                    }

                }
            }
            catch(Exception)
            {
                return new FacebookUser();
            }

        }
    }
}
