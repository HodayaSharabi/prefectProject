import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Couriers } from '../class/Couriers';
import { Observable } from 'rxjs';
import { ShippingOperationsInRealTimeService } from '../services/shipping-operations-in-real-time.service';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-shipping-operations-in-real-time',
  templateUrl: './shipping-operations-in-real-time.component.html',
  styleUrls: ['./shipping-operations-in-real-time.component.scss']
})
export class ShippingOperationsInRealTimeComponent implements OnInit {
  manager: Couriers;
  couriersMap: MapTOCurios[] = [];
  packageAddress: any;
  constructor(public shippingOperationsInRealTimeService: ShippingOperationsInRealTimeService, public router: Router) { }

  ngOnInit(): void {
    // this.getDirection()

    this.getDirection()
    this.manager = JSON.parse(localStorage.getItem("manager"));
    this.shippingOperationsInRealTimeService.getCouriersDetailMaps().subscribe(res => {
      this.couriersMap = res;
      console.log( this.couriersMap);
    })
  }
  lat: Number = 32.0761814;
  lng: Number = 34.8327112;

  origin = { lat: 32.0761814, lng: 34.8327112 };
  destination = { lat: 31.7606638, lng: 35.199288 };
  public waypoints: any = [];

  //לעשות פונקציה שמביאה לכל משלוחן את הדרך שלו ומציגה למנהל את כל המשלוחנים

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
  formattedaddress = " ";
  options = {
    componentRestrictions: {
      country: ["IL"]
    }
  }
}

export class MapTOCurios{
  CourierId: number;
  CourierFirstName: string;
  CourierLastName: string;
  latitude :number;
  longitude:number;
  LatLng:Array<{Lat: number, Lng: number}>;
}