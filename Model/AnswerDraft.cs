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
    
    public partial class AnswerDraft
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public int UserId { get; set; }
        public string HtmlContent { get; set; }
        public System.DateTime OriginDate { get; set; }
        public System.DateTime ExpiryDate { get; set; }
        public int Price { get; set; }
        public bool IsAnonymous { get; set; }

        public virtual Question Question { get; set; }
        public virtual User User { get; set; }
    }
}
