using Dto;
using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    public class ToCustomersDto
    {
        public static CustomersDto ConvertDto(Customers c)
        {
            if (c == null)
                return null;
            return new CustomersDto()
            {
                CustomerAddress = c.CustomerAddress,
                CustomerCity = c.CustomerCity,
                CustomerFirstName = c.CustomerFirstName,
                CustomerId = c.CustomerId,
                CustomerLastName = c.CustomerLastName,
                CustomerPersonalCode = c.CustomerPersonalCode,
                CustomerPhone = c.CustomerPhone,
                CustomerStatus = c.CustomerStatus,
                CustomerTz = c.CustomerTz, 
            };
        }
    }
}
