//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------


namespace PCHardwareShop.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class AllOrder
    {
        public int ID { get; set; }
        public Nullable<int> OrderdUserID { get; set; }
        public Nullable<int> ProductCatagoryLinkedID { get; set; }
        public Nullable<int> Quantity { get; set; }

        public virtual OrderdUserInfo OrderdUserInfo { get; set; }

        public virtual ProductCategoryLink ProductCategoryLink { get; set; }
    }
}
