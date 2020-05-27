using System;

namespace Store.Models
{
    public class Product
    {
        public int Id;
        public string Name { get; set; }
        public int Price { get; set; }

        private bool IsFirst => Id == 1;

        public Product(int id, string name, int price)
        {
            this.Id = id;
            this.Name = name;
            this.Price = price;
        }

        public Product(string name, int price)
        {
            this.Name = name;
            this.Price = price;
        }

        public Product()
        {
            // デシリアライズ用
        }

        public string GetInfo()
        {
            return $"Name: {Name}, Price: {Price}";
        }

        // private メソッド
        private int GetTaxIncluded(double tax)
        {
            return (int) Math.Floor(Price * tax);
        }
    }
}
