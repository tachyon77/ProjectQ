/*
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;


namespace ProjectQ.Model
{
    public partial class Question
    {
        public Question NestOneLevel()
        {
            (Answers != null ? 
                Answers.ToList(): 
                new List<Answer>()).ForEach(x=>x.NestZeroLevel());
            AspNetUser.NestZeroLevel();
            (QuestionFollowers != null ?
                QuestionFollowers.ToList() :
                new List<QuestionFollower>()).ForEach(x => x.NestZeroLevel());

            return this;
        }

        public Question NestZeroLevel()
        {
            Answers = null;
            AspNetUser = null;
            QuestionFollowers = null;

            return this;
        }
    }

    public partial class Answer
    {
        public Answer NestOneLevel()
        {
            Question.NestZeroLevel();
            (AnswerRatings != null ? 
                AnswerRatings.ToList() : 
                new List<AnswerRating>()).ForEach(x => x.NestZeroLevel());
            AspNetUser.NestZeroLevel();

            return this;
        }

        public Answer NestZeroLevel()
        {
            Question = null;
            AnswerRatings = null;
            AspNetUser = null;
            
            return this;
        }
    }

    public partial class AspNetUser
    {
        public AspNetUser NestOneLevel()
        {
            (Questions != null ?
                Questions.ToList() :
                new List<Question>()).ForEach(x => x.NestZeroLevel());
            (AnswerRatings != null ?
                AnswerRatings.ToList() :
                new List<AnswerRating>()).ForEach(x => x.NestZeroLevel());
            (Answers != null ?
                Answers.ToList() :
                new List<Answer>()).ForEach(x => x.NestZeroLevel());
            (Notifications != null ?
                Notifications.ToList() :
                new List<Notification>()).ForEach(x => x.NestZeroLevel());
            (QuestionFollowers != null ?
                QuestionFollowers.ToList() :
                new List<QuestionFollower>()).ForEach(x => x.NestZeroLevel());
            (Educations != null ?
                 Educations.ToList() :
                 new List<Education>()).ForEach(x => x.NestZeroLevel());
            (Employments != null ?
                 Employments.ToList() :
                 new List<Employment>()).ForEach(x => x.NestZeroLevel());

            return this;
        }

        public AspNetUser NestZeroLevel()
        {
            Questions = null;
            AnswerRatings = null;
            Answers = null;
            Notifications = null;
            QuestionFollowers = null;
            Educations = null;
            Employments = null;

            return this;
        }
    }

    public partial class QuestionFollower
    {
        public QuestionFollower NestOneLevel()
        {
            return this;
        }

        public QuestionFollower NestZeroLevel()
        {
            return this;
        }
    }

    public partial class AnswerRating
    {
        public AnswerRating NestOneLevel()
        {
            Answer = null;
            AspNetUser = null;

            return this;
        }

        public AnswerRating NestZeroLevel()
        {
            Answer = null;
            AspNetUser = null;

            return this;
        }
    }

    public partial class Notification
    {
        public Notification NestOneLevel()
        {
            return this;
        }

        public Notification NestZeroLevel()
        {
            return this;
        }
    }

    public partial class Education
    {
        public Education NestOneLevel()
        {
            return this;
        }

        public Education NestZeroLevel()
        {
            return this;
        }
    }

    public partial class Employment
    {
        public Employment NestOneLevel()
        {
            return this;
        }

        public Employment NestZeroLevel()
        {
            return this;
        }
    }
}
*/