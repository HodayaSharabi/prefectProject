using DAL;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CourierProject.Controllers
{
    [RoutePrefix("api/Package")]
    public class PackageController : ApiController
    {
        [Route("loginCustomer/{packageDetails}")]
        [HttpGet]
        public CourierDTO GetPackageDetails(CourierDTO PackageDetails)
        {
            return new CourierDTO();
        }

        [Route("getNewPackage")]
        [HttpPost]
        public bool getNewPackage(Packages package1)
        {
            BL.PackageBL.getNewPackage(package1);
            return true;
        }
    }
}
