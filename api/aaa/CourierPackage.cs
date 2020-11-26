using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
   public class CourierPackage
    {
        public int CourierId { get; set; }
        public int CourierPackageId { get; set; }
        public int PackageId { get; set; }
        public System.DateTime DateCollect { get; set; }
        public System.DateTime DateBring { get; set; }
        public System.DateTime DateNow { get; set; }


        public static CourierPackage ConvertDto(Dal.CourierPackage cp)
        {
            if (cp == null)
                return null;
            return new Packages()
            {
                CourierId=cp.CourierId,
            }
}
