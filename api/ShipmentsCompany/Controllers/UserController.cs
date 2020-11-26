using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CourierProject.Controllers
{
    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
        [Route("loginUser/{phone}")]
        [HttpGet]
        public CourierDTO LoginUser(string phone)
        {
            return BL.CourierBL.Login(phone);
        }
    }
}
