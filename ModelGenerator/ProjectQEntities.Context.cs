﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ProjectQ.Model
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class ProjectQEntities : DbContext
    {
        public ProjectQEntities()
            : base("name=ProjectQEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AnswerDraft> AnswerDrafts { get; set; }
        public virtual DbSet<AnswerRating> AnswerRatings { get; set; }
        public virtual DbSet<Answer> Answers { get; set; }
        public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
        public virtual DbSet<Education> Educations { get; set; }
        public virtual DbSet<Employment> Employments { get; set; }
        public virtual DbSet<Notification> Notifications { get; set; }
        public virtual DbSet<ProtectedAnswerContent> ProtectedAnswerContents { get; set; }
        public virtual DbSet<QuestionFollower> QuestionFollowers { get; set; }
        public virtual DbSet<Question> Questions { get; set; }
        public virtual DbSet<User> Users { get; set; }
    }
}
