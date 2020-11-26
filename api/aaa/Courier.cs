using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class Courier
    {

        public int CourierId { get; set; }
        public string PersonalCode { get; set; }
        public string CourierTz { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public string Status { get; set; }
        public string TypeOfTransport { get; set; }
        public int PackageId { get; set; }

        //public static Dal.Courier_TBL ConvertDal(Courier c)
        //{

        //}

        public static Courier ConvertDto(Dal.Courier_TBL c)
        {
            if (c == null)
                return null;
            return new Courier()
            {
                CourierId = c.CourierId,
                PersonalCode = c.PersonalCode,
                CourierTz=c.CourierTz,
                FirstName = c.FirstName,
                LastName=c.LastName,
                Address = c.Address,
                City = c.City,
                Phone=c.Phone,
                Status=c.Status,
                TypeOfTransport=c.TypeOfTransport,
                PackageId=c.PackageId,
            };
        }
    }
}
