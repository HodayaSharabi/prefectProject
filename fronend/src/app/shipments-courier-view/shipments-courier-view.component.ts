import { Component, OnInit } from '@angular/core';
import { Couriers } from '../class/Couriers';
import { ShipmentsCourierViewService } from '../services/shipments-courier-view.service';
import { Packages } from '../class/Packages';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipments-courier-view',
  templateUrl: './shipments-courier-view.component.html',
  styleUrls: ['./shipments-courier-view.component.scss']
})
export class ShipmentsCourierViewComponent implements OnInit {
  courier: Couriers[] = [];
  packages: Packages[] = [];
  couriersWay: Couriers[] = [];
  couriers: Couriers[] = [];

  constructor(public shipmentsCourierViewService: ShipmentsCourierViewService, public router: Router) { }

  ngOnInit(): void {
    this.getDirection();
    this.GetCourierWay();
    this.courier = JSON.parse(localStorage.getItem("courier"));
  }
  updatePersonalDetails() {
    this.shipmentsCourierViewService.update(this.courier).subscribe(res => {
      if (res == null)
        alert("נא הקש פרטים נחוצים");
      else
        localStorage.setItem("courier", JSON.stringify(res));
      alert("הפרטים נשמרו בהצלחה");
    })
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

  // Local Variable defined 
  formattedaddress = " ";
  options = {
    componentRestrictions: {
      country: ["IL"]
    }
  }
  // public AddressChange(address: any) {
  //   //setting address from API to local variable 
  //   debugger;
  //   this.getGeoLocation(address.formatted_address).subscribe(res => {
  //     var lat = res.lat();
  //     var lng = res.lng()
  //     debugger;
  //   })
  // }
  GetCourierWay() {
    this.shipmentsCourierViewService.GetCourierListFromServer().subscribe(res => {
      if (res == null) {
        alert("לא נמצאו מסלולי משלוחים!");
      }
      else
        this.courier == res;
    })
  }
}
