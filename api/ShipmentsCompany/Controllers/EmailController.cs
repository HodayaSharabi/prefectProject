using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;
namespace ShipmentsCompany.Controllers
{
    [RoutePrefix("api/Email")]
    public class EmailController : ApiController
    {
        [Route("SendEmail")]
        [HttpPost]
        public void POSTsengEmail([FromBody] Email email)
        {
            EmailBLL.sendEmail(email);
        }
    }
}
