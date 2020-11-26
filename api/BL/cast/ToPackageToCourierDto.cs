using Dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    public class ToPackageToCourierDto
    {
        public static PackageToCourierDto ConvertDto(PackagesToCourier c)
        {
            if (c == null)
                return null;
            return new PackageToCourierDto()
            {
                CourierCode = c.CourierCode,
                PackageCode = c.PackageCode.Value,

            };
        }
    }
}


