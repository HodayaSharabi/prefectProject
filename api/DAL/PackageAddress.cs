//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class PackageAddress
    {
        public int IdAddress { get; set; }
        public Nullable<int> IdPackage { get; set; }
        public Nullable<int> SourcePackageLon { get; set; }
        public Nullable<int> SourcePackageLat { get; set; }
        public Nullable<int> DestinetionPackageLon { get; set; }
        public Nullable<int> DestinationPackageLat { get; set; }
    }
}
