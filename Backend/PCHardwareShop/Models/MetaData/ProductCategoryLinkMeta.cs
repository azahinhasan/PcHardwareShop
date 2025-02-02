﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Xml.Serialization;
namespace PCHardwareShop.Models.MetaData
{
    public class ProductCategoryLinkMeta
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ProductCategoryLinkMeta()
        {
            this.AllOrders = new HashSet<AllOrder>();
        }

        public int ID { get; set; }
        public int pID { get; set; }
        public Nullable<int> pCategory { get; set; }

        public virtual Category Category { get; set; }
        public virtual Product Product { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        [JsonIgnore, XmlIgnore]
        public virtual ICollection<AllOrder> AllOrders { get; set; }
    }
}