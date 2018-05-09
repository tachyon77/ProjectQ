using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectQ.Model
{
    public class UserSpecificAnswerView
    {
        public Answer Answer { get; set; }
        public AnswerRating Rating { get; set; } // Rating by current user
        public decimal AverageRating { get; set; } // Average of all user rating
    }
}
