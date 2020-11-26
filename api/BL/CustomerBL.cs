
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
    public class CustomerBL
    {
        public static CourierCompanyEntities db = new CourierCompanyEntities();
        public static bool Identify_who_is_entering(string CustomerCode)
        {
            Console.WriteLine(CustomerCode);
            return true;
        }

        public static CustomerDTO Login(string CustomerCode)
        {
            var customerLogIn = db.Customers.FirstOrDefault(p => p.CustomerPersonalCode == CustomerCode && p.CustomerStatus == 2);
            return CustomerDTO.ConvertDto(customerLogIn);
        }
        public static bool AddNewCustomer(Customers newCus)
        {
            db.Customers.Add(newCus);
            db.SaveChanges();
            return true;
        }
        public static bool UpdateRegularCustomer(Customers UpdateCus)
        {

            var cus = db.Customers.Find(UpdateCus.CustomerId);
            cus.CustomerCity = UpdateCus.CustomerCity;
            cus.CustomerAddress = UpdateCus.CustomerAddress;
            cus.CustomerFirstName = UpdateCus.CustomerFirstName;
            cus.CustomerId = UpdateCus.CustomerId;
            cus.CustomerLastName = UpdateCus.CustomerLastName;
            cus.CustomerPersonalCode = UpdateCus.CustomerPersonalCode;
            cus.CustomerPhone = UpdateCus.CustomerPhone;
            cus.CustomerStatus = UpdateCus.CustomerStatus;
            cus.CustomerTz = UpdateCus.CustomerTz;

            db.SaveChanges();
            return true;

        }
        public static bool Deletion(string PersonalCode)
        {
            var customerId = db.Customers.Find(Int32.Parse(PersonalCode));
            if (customerId != null)
            {
                db.Customers.Remove(customerId);
            }
            db.SaveChanges();
            return true;
        }
        public static List<Customers> getCustomerDetail(Customers customerId)
        {
            return db.Customers.Where(x => x == customerId).ToList();
        }
        public static bool getContactFile(Contact contactFile)
        {
            db.Contact.Add(contactFile);
            db.SaveChanges();
            return true;
        }
    }
}
