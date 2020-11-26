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
    [RoutePrefix("api/Courier")]
    public class CourierController : ApiController
    {
        [Route("loginCourier/{CourierCode}")]
        [HttpGet]
        public CourierDTO loginCourier(string CourierCode)
        {
            return BL.CourierBL.Login(CourierCode);
        }
        [Route("deleteCourier/{courierTz}")]
        [HttpGet]
        public bool deleteCourier(string courierTz)
        {
            return BL.CourierBL.Delete(courierTz);
        }
        [Route("updateCourier")]
        [HttpPost]
        public bool UpdateCourier([FromBody]Couriers courier)
        {
            return BL.CourierBL.UpdatePersonalDetails(courier);
        }
        [Route("addCourier/{newCourier}")]
        [HttpGet]
        public bool addCourier([FromBody]Couriers newCourier)
        {
            return BL.CourierBL.AddNewCourier(newCourier);
        }
        [Route("packagesToCourier/")]
        [HttpGet]
        public bool packagesToCourier([FromBody]Couriers newCourier)
        {
            return BL.CourierBL.AddNewCourier(newCourier);
        }
        [Route("shipingSelection")]
        [HttpGet]
        public List<Packages> shipingSelection()
        {
            return BL.CourierBL.ShipingSelection();
        }
        //[Route("GetSelectionShipment")]
        //[HttpPost]
        //public bool GetSelectionShipment(int courierId, int packageIdPac)
        //{
        //    return BL.CourierBL.GetSelectionShipment(courierId, packageIdPac);
        //}

        //[Route("GetTrack/{courier}")]
        //[HttpGet]
        //public bool GetTrack(List<PackageAddress> courier)
        //{
        //    return BL.CourierBL.GetCourierTrack(courier);
        //}

        //[Route("getMyShipments/{courier}")]
        //[HttpGet]
        //public List<PackageDto> GetMyShipments(int courier)
        //{
        //    return BL.CourierBL.(courier);
        //}



    }
}