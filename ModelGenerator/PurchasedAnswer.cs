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
    
    public partial class PurchasedAnswer
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int AnswerId { get; set; }
        public System.DateTime PurchaseDate { get; set; }
        public string HtmlContent { get; set; }
    
        public virtual Answer Answer { get; set; }
        public virtual User User { get; set; }
    }
}