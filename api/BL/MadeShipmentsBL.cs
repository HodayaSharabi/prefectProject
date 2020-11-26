
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BL
{
    public class MadeShipmentsBL
    {
        public static CourierCompanyEntities db = new CourierCompanyEntities();

        public static List<MadeShipments> GetMyShipment(int customerId)
        {
            var MS = db.MadeShipments.Where(x => x.CustomerId == customerId).ToList();
            return MS;

        }

        public static List<MadeShipments> GetMadeShipments()
        {
            var MS = db.MadeShipments.ToList();
            return MS;

        }
    }
}
