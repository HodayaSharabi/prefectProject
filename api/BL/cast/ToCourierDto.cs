using Dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    public class ToCourierDto
    {
        public static CourierDto ConvertDto(Couriers cou)
        {
            if (cou == null)
                return null;
            return new CourierDto()
            {
                CourierAddress = cou.CourierAddress,
                CourierCity = cou.CourierCity,
                CourierFirstName = cou.CourierFirstName,
                CourierId = cou.CourierId,
                CourierLastName = cou.CourierLastName,
                CourierPersonalCode = cou.CourierPersonalCode,
                CourierPhone = cou.CourierPhone,
                CourierStatus = cou.CourierStatus,
                CourierTypeOfTransport = cou.CourierTypeOfTransport,
                CourierTz = cou.CourierTz,

            };
        }
    }
}
