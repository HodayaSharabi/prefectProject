using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
namespace Dto
{
    public class PackagesDTO
    {
        public int PackageId { get; set; }
        public string CollectionAddress { get; set; }
        public Nullable<int> Cfloor { get; set; }
        public string Destination { get; set; }
        public Nullable<int> Dfloor { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string SenderPhone { get; set; }
        public string InvoiceName { get; set; }
        public string PhoneReceivesShippingPac { get; set; }
        public string CompanyName { get; set; }
        public string FullName { get; set; }
        public string DuringSending { get; set; }
        public Nullable<int> Weigth { get; set; }
        public Nullable<System.DateTime> DateNow { get; set; }
        public string Description { get; set; }
        public string CommendsPac { get; set; }
        public string Status { get; set; }
        public static PackagesDTO ConvertDto(Packages p)
        {
            if (p == null)
                return null;
            return new PackagesDTO()
            {
                PackageId = p.PackageId,
                CollectionAddress = p.CollectionAddress,
                Cfloor = p.Cfloor,
                Destination = p.Destination,
                Dfloor = p.Dfloor,
                FirstName = p.FirstName,
                LastName = p.LastName,
                Email = p.Email,
                SenderPhone = p.SenderPhone,
                InvoiceName = p.InvoiceName,
                CompanyName = p.CompanyName,
                FullName = p.FullName,
                DuringSending = p.DuringSending,
                Weigth = p.Weigth,
                DateNow = p.DateNow,
                Description = p.Description,
                Status = p.Status,


            };
        }
    }
}
