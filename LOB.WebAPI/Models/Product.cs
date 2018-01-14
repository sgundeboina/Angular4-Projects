using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MyLOB.WebAPI.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string ProductCode { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public decimal StarRating { get; set; }
        public string Category { get; set; }
        
        public DateTime ReleaseDate { get; set; }
        public string ImageUrl { get; set; }
        public string[] Tags{ get; set; }
      
    }
}