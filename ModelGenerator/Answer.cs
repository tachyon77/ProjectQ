//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class Answer
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public string UserId { get; set; }
        public string text { get; set; }
        public System.DateTime OriginDate { get; set; }
        public bool IsPrivate { get; set; }
        public System.DateTime ExpiryDate { get; set; }
        public bool IsDeleted { get; set; }
    
        public virtual AspNetUser AspNetUser { get; set; }
        public virtual Question Question { get; set; }
    }
}
