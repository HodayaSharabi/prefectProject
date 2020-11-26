
using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    class ToMadeShipmentsDto
    {
        public static MadeShipment ConvertDto(MadeShipment p)
        {
            if (p == null)
                return null;
            return new MadeShipment()
            {
                PackageId = p.PackageId,
                CollectionAddress = p.CollectionAddress,
                Cfloor = p.Cfloor.Value,
                Destination = p.Destination,
                Dfloor = p.Dfloor.Value,
                FirstName = p.FirstName,
                LastName = p.LastName,
                Email = p.Email,
                SenderPhone = p.SenderPhone,
                InvoiceName = p.InvoiceName,
                PhoneReceivesShipping = p.PhoneReceivesShipping,
                CompanyName = p.CompanyName,
                FullName = p.FullName,
                DuringSending = p.DuringSending,
                Weigth = p.Weigth,
                DateNow = p.DateNow.Value,
                Description = p.Description,
                Commends = p.Commends,
                Status = p.Status,


            };
        }

    }
}
