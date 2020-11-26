using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
namespace Dto
{
    public class CourierPackageDTO
    {
        public int CourierId { get; set; }
        public Nullable<int> CourierPackageId { get; set; }
        public Nullable<int> PackageId { get; set; }
        public Nullable<System.DateTime> DateCollect { get; set; }
        public Nullable<System.DateTime> DateBring { get; set; }
        public Nullable<System.DateTime> DateNow { get; set; }
        public static CourierPackageDTO ConvertDto(CourierPackage cp)
        {
            if (cp == null)
                return null;
            return new CourierPackageDTO()
            {
                CourierId = cp.CourierId,
                CourierPackageId = cp.CourierPackageId,
                PackageId = cp.PackageId,
                DateCollect = cp.DateCollect,
                DateBring = cp.DateBring,
                DateNow =cp.DateNow,

            };
        }
    }
}
