using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
using DTO;
using BL;
using Dto;
namespace CourierProject.Controllers
{
    [RoutePrefix("api/Comments")]
    public class CommentsController : ApiController
    {
        [Route("GetCommentsToManager")]
        [HttpGet]
        public List<Coment> GetCommentsToManager()
        {
            return CourierBL.GetComments();
        }
        [Route("GetCommentsToCourier/{courierId}")]
        [HttpGet]
        public List<CouriersCommentsDTO> GetCommentsToCourier(int courierId)
        {
            return BL.CourierBL.CourierComments(courierId);

        }
    };
}
