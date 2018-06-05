using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework
{
    public class ProjectQEntities : DbContext
    {
        public ProjectQEntities(DbContextOptions<ProjectQEntities> options)
           : base(options)
        {
        }

        public DbSet<QuestionFollower> QuestionFollowers { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<QuestionView> QuestionViews { get; set; }
        public DbSet<QuestionTopic> QuestionTopics { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<AnswerPayment> AnswerPayments { get; set; }
        public DbSet<PurchasedAnswer> PurchasedAnswers { get; set; }
        public DbSet<AnswerDraft> AnswerDrafts { get; set; }
        public DbSet<ProtectedAnswerContent> ProtectedAnswerContents { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<AspNetUser> AspNetUsers { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<AnswerRating> AnswerRatings { get; set; }
        public DbSet<Education> Educations { get; set; }
        public DbSet<Employment> Employments { get; set; }
    }
}
