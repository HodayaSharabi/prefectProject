using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
  public  class PackageAddress
    {
        public int IdAddress { get; set; }
        public int IdPackage { get; set; }
        public double SourcePackageLon { get; set; }
        public double SourcePackageLat { get; set; }
        public double DestinetionPackageLon { get; set; }
        public double DestinationPackageLat { get; set; }
    }
}
