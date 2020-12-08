import { Component, Input, OnInit } from '@angular/core';
import { Packages } from '../class/Packages';
import { NewShipmentService } from '../services/new-shipment.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PackageAddress } from '../class/PackageAddress';

@Component({
  selector: 'app-new-shipment',
  templateUrl: './new-shipment.component.html',
  styleUrls: ['./new-shipment.component.scss']
})
export class NewShipmentComponent implements OnInit {
  @Input() latitudec:any
  @Input() longitudec: any
  @Input() addressc: any
  newShipment: Packages = new Packages();


  constructor(public newShipmentService: NewShipmentService, router: Router) { }
  ngOnInit(): void {
  }
  public doSomething(date: any):void {
    debugger
    console.log('Picked date: ', date);
}
  getGeoLocation(address: string): Observable<any> {
    console.log('Getting address: ', address);
    let geocoder = new google.maps.Geocoder();
    return Observable.create(observer => {
      geocoder.geocode({
        'address': address
      }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          observer.next(results[0].geometry.location);
          observer.complete();
        } else {
          console.log('Error: ', results, ' & Status: ', status);
          observer.error();
        }
      });
    });
  }

  formattedaddress = " ";
  options = {
    componentRestrictions: {
      country: ["IL"]
    }
  }

  // public CollactionAddressChange(address: any) {
  //   //setting address from API to local variable 
  //   debugger;
  //   this.getGeoLocation(address.formatted_address).subscribe(res => {
  //     this.newShipment.packageAdress.destinationPackageLat = res.lat();
  //     this.newShipment.packageAdress.destinetionPackageLon = res.lng()
  //     debugger;
  //   })
  // }
  public DestinationAddressChange(address: any) {
    //setting address from API to local variable 
    debugger;
    this.getGeoLocation(address.formatted_address).subscribe(res => {
      // var waypoints[1][0] = res.lat();
      // var waypoints[1][1] = res.lng()
      debugger;
    })
  }

  GetNewShipment() {
    console.log(this.newShipment)
    this.newShipmentService.getNewShipment(this.newShipment).subscribe(res => {
      if (res == null)
        alert("נא הכנס פרטים נחוצים");
      else {
        localStorage.setItem("customer", JSON.stringify(res));
        alert("תודה רבה על שהשתמשת בישרותינו");
      }
    })
  }

}
