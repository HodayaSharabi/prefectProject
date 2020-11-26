using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
namespace DTO
{
    public class CustomerDTO
    {
        public int CustomerId { get; set; }
        public string CustomerPersonalCode { get; set; }
        public string CustomerTz { get; set; }
        public string CustomerFirstName { get; set; }
        public string CustomerLastName { get; set; }
        public string CustomerAddress { get; set; }
        public string CustomerCity { get; set; }
        public string CustomerPhone { get; set; }
        public Nullable<int> CustomerStatus { get; set; }
        public static CustomerDTO ConvertDto(Customers c)
        {
            if (c == null)
                return null;
            return new CustomerDTO()
            {
                CustomerId = c.CustomerId,
                CustomerPersonalCode = c.CustomerPersonalCode,
                CustomerTz = c.CustomerTz,
                CustomerFirstName = c.CustomerFirstName,
                CustomerLastName = c.CustomerLastName,
                CustomerAddress = c.CustomerAddress,
                CustomerCity = c.CustomerCity,
                CustomerPhone = c.CustomerPhone,
                CustomerStatus = c.CustomerStatus,
            };
        }
    }
}
