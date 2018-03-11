using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using Newtonsoft.Json;

// namespace is not equal to folder structure on purpose.
// we need to be in the same namespace as Model
namespace ProjectQ.Model
{
    [ModelMetadataType(typeof(NotificationMetadata))]
    public partial class Notification
    {

    }

    public class NotificationMetadata
    {
        [JsonIgnore]
        public virtual AspNetUser AspNetUser { get; set; }
    }
}
