using BL;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CourierProject.Controllers
{
    [RoutePrefix("api/Customer")]
    public class CustomerController : ApiController
    {
        [Route("loginCustomer/{CustomerCode}")]
        [HttpGet]
        public CustomerDTO loginCustomer(string CustomerCode)
        {
            return BL.CustomerBL.Login(CustomerCode);
        }
        [Route("UpdateNewCustomer")]
        [HttpPost]
        public bool UpdateNewCustomer([FromBody]Customers Customers)
        {
            return BL.CustomerBL.AddNewCustomer(Customers);
        }
        [Route("UpdateDetails")]
        [HttpPost]
        public bool UpdateCustomerDetails([FromBody]Customers UpdateDetailsCourier)
        {
            return BL.CustomerBL.UpdateRegularCustomer(UpdateDetailsCourier);
        }
        [Route("GetCustomerDetail/{customerId}")]
        [HttpGet]
        public List<Customers> GetCustomerDetail(Customers customerId)
        {
            return BL.CustomerBL.getCustomerDetail(customerId);
        }
        [Route("deleteCustomerFromWebsite/{customerId}")]
        [HttpGet]
        public bool deleteCustomerFromWebsite(string customerId)
        {
            return BL.CustomerBL.Deletion(customerId);
        }
        [Route("GetContactFile")]
        [HttpPost]
        public bool postContactFile([FromBody]Contact contactFile)
        {
            return BL.CustomerBL.getContactFile(contactFile);
        }
    }
}
