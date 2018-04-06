using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework
{
    public abstract class ProjectQEntities : DbContext
    {
        public DbSet<QuestionFollower> QuestionFollowers { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<AspNetUser> AspNetUsers { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<AnswerRating> AnswerRatings { get; set; }
        public DbSet<Education> Educations { get; set; }
        public DbSet<Employment> Employments { get; set; }
    }
}
