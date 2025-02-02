﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Xml.Serialization;

namespace PCHardwareShop.Models.MetaData
{
    public class ProductMeta
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ProductMeta()
        {
            this.ProductCategoryLinks = new HashSet<ProductCategoryLink>();
        }

        public int ID { get; set; }
        public string pName { get; set; }
        public string Price { get; set; }
        public string Status { get; set; }
        public Nullable<int> BrandID { get; set; }
        public Nullable<int> SpecificationID { get; set; }
        public string MainPic { get; set; }
        public string Pic2 { get; set; }
        public string Pic3 { get; set; }


        public virtual Brand Brand { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        [JsonIgnore, XmlIgnore]
        public virtual ICollection<ProductCategoryLink> ProductCategoryLinks { get; set; }
        public virtual ProductSpecification ProductSpecification { get; set; }
   
       
    }
}

