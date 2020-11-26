using Dto;
using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    public class ToPackageDto
    {
        public static PackagesDto ConvertDto(Package p)
        {
            if (p == null)
                return null;
            return new PackagesDto()
            {
                CfloorPac = p.CfloorPac.Value,
                CollectionAddressPac = p.CollectionAddressPac,
                CommendsPac = p.CommendsPac,
                CompanyNamePac = p.CompanyNamePac,
                DateNowPac = p.DateNowPac.Value,
                DescriptionPac = p.DescriptionPac,
                DestinationPac = p.DestinationPac,
                DfloorPac = p.DfloorPac.Value,
                DuringSendingPac = p.DuringSendingPac.Value,
                EmailPac = p.EmailPac,
                FirstNamePac = p.FirstNamePac,
                FullNamePac = p.FullNamePac,
                InvoiceNamePac = p.InvoiceNamePac,
                LastNamePac = p.LastNamePac,
                PackageIdPac = p.PackageIdPac,
                PhoneReceivesShippingPac = p.PhoneReceivesShippingPac,
                SenderPhonePac = p.SenderPhonePac,
                StatusPac = p.StatusPac,
                WeigthPac = p.WeigthPac,
            };
        }
    }
}
