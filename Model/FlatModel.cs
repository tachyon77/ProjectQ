using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectQ.Model
{
    public partial class Question
    {
        public Question flatten()
        {
            Answers = null;
            AspNetUser = null;
            QuestionFollowers = null;

            return this;
        }
    }

    public partial class Answer
    {
        public Answer flatten()
        {
            Question = null;
            AnswerRatings = null;
            AspNetUser = null;
            
            return this;
        }
    }

    public partial class AspNetUser
    {
        public AspNetUser flatten()
        {
            Questions = null;
            AnswerRatings = null;
            Answers = null;
            Notifications = null;
            QuestionFollowers = null; 

            return this;
        }
    }

    public partial class AnswerRating
    {
        public AnswerRating flatten()
        {
            Answer = null;
            AspNetUser = null;

            return this;
        }
    }
}
