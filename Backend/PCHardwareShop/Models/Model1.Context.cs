﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class PcHardwareShopEntities4 : DbContext
    {
        public PcHardwareShopEntities4()
            : base("name=PcHardwareShopEntities4")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AllOrder> AllOrders { get; set; }
        public virtual DbSet<Brand> Brands { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<CustomerInfo> CustomerInfoes { get; set; }
        public virtual DbSet<OrderdUserInfo> OrderdUserInfoes { get; set; }
        public virtual DbSet<ProductCategoryLink> ProductCategoryLinks { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ProductSpecification> ProductSpecifications { get; set; }
        public virtual DbSet<PromoCode> PromoCodes { get; set; }
        public virtual DbSet<StatusTable> StatusTables { get; set; }
        public virtual DbSet<UserLoginTable> UserLoginTables { get; set; }
        public virtual DbSet<EmployeeInfo> EmployeeInfoes { get; set; }
        public virtual DbSet<EmployeeRank> EmployeeRanks { get; set; }
        public virtual DbSet<TokenTable> TokenTables { get; set; }
    }
}
