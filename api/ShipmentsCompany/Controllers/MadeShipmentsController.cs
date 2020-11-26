using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
using BL;

namespace CourierProject.Controllers
{
    [RoutePrefix("api/MadeShipments")]
    public class MadeShipmentsController : ApiController
    {
        [Route("GetMyShipmentByUserId/{customerId}")]
        [HttpGet]
        public List<MadeShipments> GetMyShipmentByUserId(int customerId)
        {
            return BL.MadeShipmentsBL.GetMyShipment(customerId);
        }
        [Route("GetMadeShipments")]
        [HttpGet]
        public List<MadeShipments> GetMadeShipments()
        {
            return BL.MadeShipmentsBL.GetMadeShipments();
        }
    }
}
