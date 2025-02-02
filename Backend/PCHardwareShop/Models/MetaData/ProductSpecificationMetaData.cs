﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Xml.Serialization;

namespace PCHardwareShop.Models.MetaData
{
    public class ProductSpecificationMetaData
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ProductSpecificationMetaData()
        {
            this.Products = new HashSet<Product>();
        }

        public int SpecificationID { get; set; }
        public string Processor { get; set; }
        public string Colors { get; set; }
        public string Display { get; set; }
        public string Memory { get; set; }
        public string Storage { get; set; }
        public string Graphics { get; set; }
        public string OS { get; set; }
        public string Battery { get; set; }
        public string Adapter { get; set; }
        public string Audio { get; set; }
        public string Keyboard { get; set; }
        public string WebCam { get; set; }
        public string Manufacturing_Warranty { get; set; }
        public string Capacity { get; set; }
        public string Form_Factor { get; set; }
        public string Flash_Type { get; set; }
        public string Interface { get; set; }
        public string Sequential_R_W { get; set; }
        public string MTBF { get; set; }
        public string Operating_Temperature { get; set; }
        public string Storage_Temperature { get; set; }
        public string Ram_Type { get; set; }
        public string Ram_Capacity { get; set; }
        public string Ram_Frequency { get; set; }
        public string Ram_Operating_voltage { get; set; }
        public string Ram_Latency { get; set; }
        public string Ram_Pin { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        [JsonIgnore, XmlIgnore]
        public virtual ICollection<Product> Products { get; set; }
    }
}