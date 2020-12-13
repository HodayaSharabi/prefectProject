using DAL;
using Dto;
using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CourierProject.Controllers
{
    [RoutePrefix("api/Manager")]
    public class ManagerController : ApiController
    {
        [Route("loginManager/{ManagerCode}")]
        [HttpGet]
        public CourierDTO LoginManager(string ManagerCode)
        {
            return BL.CourierBL.ManagerLogin(ManagerCode);
        }
        [Route("GetCouriersDetail")]
        public IHttpActionResult GetCouriersDetail()
        {
            return Ok( CourierBL.GetCouriersDetail());
        }
        [Route("GetCouriersDetailMaps")]
        public IHttpActionResult GetCouriersDetailMaps()
        {
            return Ok(CourierBL.GetCouriersDetailMaps());

        }
    }
}
