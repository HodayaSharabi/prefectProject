using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using Dto;

namespace BL
{
    public class CourierBL
    {
        public static CourierCompanyEntities db = new CourierCompanyEntities();

        public static bool Identify_who_is_entering(string CourierCode)
        {
            Console.WriteLine(CourierCode);
            return true;
        }

        public static CourierDTO Login(string CourierCode)
        {
            Couriers courier = db.Couriers.FirstOrDefault(p => p.CourierPersonalCode == CourierCode && p.CourierStatus == 1);
            return CourierDTO.ConvertDto(courier);
        }

        public static CourierDTO ManagerLogin(string ManagerCode)
        {
            Couriers manager = db.Couriers.FirstOrDefault(p => p.CourierPersonalCode == ManagerCode && p.CourierStatus == 2);
            return CourierDTO.ConvertDto(manager);
        }

        public static bool Delete(string courierTz)
        {
            var courierId = db.Couriers.Find(courierTz);
            if (courierId != null)
            {
                db.Couriers.Remove(courierId);
            }
            db.SaveChanges();
            return true;
        }
        public static List<Packages> ShipingSelection()
        {
            var y = db.Packages.Where(x => x.Status == "false").ToList();
            return y;
        }
        public static bool UpdatePersonalDetails(Couriers courier)
        {
            var courierDetail = db.Couriers.FirstOrDefault(p => p.CourierTz == courier.CourierTz);
            courierDetail.CourierAddress = courier.CourierAddress;
            courierDetail.CourierCity = courier.CourierCity;
            courierDetail.CourierFirstName = courier.CourierFirstName;
            courierDetail.CourierId = courier.CourierId;
            //courierDetail.pa = courier.CourierPackage;
            courierDetail.CourierPersonalCode = courier.CourierPersonalCode;
            courierDetail.CourierPhone = courier.CourierPhone;
            courierDetail.CourierStatus = courier.CourierStatus;
            courierDetail.CourierTypeOfTransport = courier.CourierTypeOfTransport;

            db.SaveChanges();
            return true;
        }

        public static bool AddNewCourier(Couriers courier)
        {
            //db.Customers.AddRange(courier);
            db.SaveChanges();
            return true;
        }
        public static List<Coment> GetComments()
        {
            var r = db.Coment.ToList();
            return r;
        }
        public static List<CourierDTO> GetCouriersDetail()
        {
            List<Couriers> c = db.Couriers.ToList();
            return CourierDTO.ListToDTO(c);
        }
        public static List<CouriersCommentsDTO> CourierComments(int courierId)
        {
            List<CouriersComments> cc = db.CouriersComments.Where(x => x.CourierId == courierId).ToList();
            return CouriersCommentsDTO.Listtodto(cc);
        }
        //GetSelectionShipment - הפונקציה
        //צריך ליצור אוביקט מסוג משלוחן שיכיל בתוכו את כל פרטי המשלוחן
        //ואוביקט מסוג משלוח שיכיל את כל פרטי המשלוח
        // id האוביקטים יהיו לפי ה
        // db - ואז נוסיף אותם ל

        //public static bool GetSelectionShipment(int courierId, int packageIdPac)
        //{
        //    var y = db.Couriers.FirstOrDefault(x => x.CourierId == courierId);
        //    var z = db.Packages.FirstOrDefault(x => x.PackageIdPac == packageIdPac);
        //    db.PackagesToCouriers.Add(y);
        //    db.PackagesToCouriers.Add(z);
        //    db.SaveChanges();
        //    return true;
        //}
        //public static List<Packages> GetMyShipments(Couriers courier)
        //{
        //    var s = db.Packages.Where(x => x)
        //}
        //    public static List<PackageAddress> GetCourierTrack(Couriers courier)
        //    {
        //        //1. ההגבלות במשלוחן הם המשקל המקסימאלי של כל החבילות, שיכול המשלוחן לקחת 
        //        // ... והמשקל המקסימאלי לחבילה שיכול המשלוחן לקחת

        //        var y = db.Couriers.Where(x => )
        //        //var c = db.Packages.Where(x => x.WeigthPac <)
        //        //var t = db.PackageAddress.Where(x => x.IdPackage == )
        //    }
    }
}
