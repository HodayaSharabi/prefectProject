using Dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
   public class ToCommentCourierDto
    {
        public static CourierCommentDto ConvertDto(CourierComment1 c)
        {
            if (c == null)
                return null;
            return new CourierCommentDto()
            {
                CourierId = c.CourierId.Value,
                ResponseId = c.ResponseId,
                FullName = c.FullName,
                Phone = c.Phone,
                Email = c.Email,
                Response = c.Response,
            };
        }
    }
}
