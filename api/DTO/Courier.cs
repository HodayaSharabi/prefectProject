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

        public string CourierId { get; set; }
        public string PersonalCode { get; set; }
        public string CourierTz { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public Nullable<int> Status { get; set; }
        public Nullable<int> TypeOfTransport { get; set; }

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
                PersonalCode = c.PersonalCode,
                CourierTz = c.CourierTz,
                FirstName = c.FirstName,
                LastName = c.LastName,
                Address = c.Address,
                City = c.City,
                Phone = c.Phone,
                Status = c.Status,
                TypeOfTransport = c.TypeOfTransport,
            };
        }
        public static List<CourierDTO> ListToDTO(List<Couriers> list)
        {
            return list.Select(x => ConvertDto(x)).ToList();
        }
    }
}
