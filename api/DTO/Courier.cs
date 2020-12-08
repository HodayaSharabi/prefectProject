using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
namespace Dto
{
    public class CourierDTO
    {
        public int CourierId { get; set; }
        public string CourierPersonalCode { get; set; }
        public string CourierTz { get; set; }
        public string CourierFirstName { get; set; }
        public string CourierLastName { get; set; }
        public string CourierAddress { get; set; }
        public string CourierCity { get; set; }
        public string CourierPhone { get; set; }
        public Nullable<int> CourierStatus { get; set; }
        public Nullable<int> CourierTypeOfTransport { get; set; }
        public Nullable<double> Lon { get; set; }
        public Nullable<double> Lat { get; set; }

        //public static Dal.Courier_TBL ConvertDal(Courier c)
        //{

        //}

        public static CourierDTO ConvertDto(Couriers c)
        {
            if (c == null)
                return null;
            return new CourierDTO()
            {
                CourierId = c.CourierId,
                CourierPersonalCode = c.CourierPersonalCode,
                CourierTz = c.CourierTz,
                CourierFirstName = c.CourierFirstName,
                CourierLastName = c.CourierLastName,
                CourierAddress = c.CourierAddress,
                CourierCity = c.CourierCity,
                CourierPhone = c.CourierPhone,
                CourierStatus = c.CourierStatus,
                CourierTypeOfTransport = c.CourierTypeOfTransport,
                Lon= c.Lon , 
                Lat= c.Lat,
            };
        }
        public static List<CourierDTO> ListToDTO(List<Couriers> list)
        {
            return list.Select(x => ConvertDto(x)).ToList();
        }
    }
}
