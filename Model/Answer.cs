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
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Answer()
        {
            this.AnswerRatings = new HashSet<AnswerRating>();
            this.PurchasedAnswers = new HashSet<PurchasedAnswer>();
        }
    
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public int UserId { get; set; }
        public string RedactedHtmlContent { get; set; }
        public System.DateTime OriginDate { get; set; }
        public bool IsProtected { get; set; }
        public System.DateTime ExpiryDate { get; set; }
        public int ProtectedAnswerContentId { get; set; }
        public int Price { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AnswerRating> AnswerRatings { get; set; }
        public virtual ProtectedAnswerContent ProtectedAnswerContent { get; set; }
        public virtual Question Question { get; set; }
        public virtual User User { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PurchasedAnswer> PurchasedAnswers { get; set; }
    }
}
