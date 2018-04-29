using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectQ.Model
{
    public class UserSpecificQuestionPreview
    {
        public Question Question { get; set; }
        public bool IsFollowing { get; set; }
        public Answer PreviewAnswer { get; set; }
    }
}
