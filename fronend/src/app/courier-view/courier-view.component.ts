import { Component, OnInit } from '@angular/core';
import { Packages } from '../class/Packages';
import { CourierViewService } from '../services/courier-view.service';
import { Router } from '@angular/router';
import { Couriers } from '../class/Couriers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courier-view',
  templateUrl: './courier-view.component.html',
  styleUrls: ['./courier-view.component.scss']
})
export class CourierViewComponent implements OnInit {
  myShipments: Packages[] = [];
  courier: Couriers = new Couriers();
  packages: Packages[] = [];
  constructor(public courierViewService: CourierViewService, public router: Router) { }

  returnHome() {
    this.router.navigate([""]);
  }

  ngOnInit(): void {
    // this.getDirection()
    this.getDirection()
    //function to get package of courier
    this.courier = JSON.parse(localStorage.getItem("courier"));
    // this.packages=res
    this.getMyShipmentsFromServer();
  }

  updatePersonalDetails() {
    this.courierViewService.update(this.courier).subscribe(res => {
      if (res == null)
        alert("נא הקש פרטים נחוצים");
      else
        localStorage.setItem("courier", JSON.stringify(res));
      alert("הפרטים נשמרו בהצלחה");
    })
  }

  ViewShippingRoute() {
    this.courierViewService.ViewShippingRouteService(this.courier).subscribe(res => {
      if (res == null)
        alert("נא הקש פרטים נחוצים");
      else
        localStorage.setItem("courier", JSON.stringify(res));
    })
  }
  getMyShipmentsFromServer() {
    this.courierViewService.getMyShipments(this.courier.courierId).subscribe(res => {
      if (res == null)
        alert("לא נמצאו לך משלוחים מתאים")
      else
        this.myShipments == res;
    })
  }
  ViewShippingsTable() {
    // this.courierViewService.ViewShippingRouteService(this.courier.courierTz).subscribe(res => {
    //   if (res == null)
    //     alert("נא הקש פרטים נחוצים");
    //   else
    //     localStorage.setItem("courier", JSON.stringify(res));
    // })
  }

  lat: Number = 32.0761814;
  lng: Number = 34.8327112;

  origin = { lat: 32.0761814, lng: 34.8327112 };
  destination = { lat: 31.7606638, lng: 35.199288 };
  public waypoints: any = [];

  getDirection() {
    // this.origin = { lat: 34.833736, lng: 34.833736 }
    // this.destination = { lat: 32.077622, lng: 34.833736 }
    this.waypoints = [
      { location: { lat: 24.799524, lng: 120.975015 } },
      { location: { lat: 24.799524, lng: 120.975016 } }
    ];

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

  //Local Variable defined 
  formattedaddress = " ";
  options = {
    componentRestrictions: {
      country: ["IL"]
    }
  }
  public AddressChange(address: any) {
    //setting address from API to local variable 
    debugger;
    this.getGeoLocation(address.formatted_address).subscribe(res => {
      var lat = res.lat();
      var lng = res.lng()
      debugger;
    })
  }

}
