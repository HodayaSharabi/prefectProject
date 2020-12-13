import { Component, OnInit } from '@angular/core';
import { ILatLng } from '../directions-map.directive';
import {DirectionsMapDirective} from '../directions-map.directive'
@Component({
  selector: 'app-router-map',
  templateUrl: './router-map.component.html',
  styleUrls: ['./router-map.component.scss']
})
export class RouterMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("shiar");
  }
 // Washington, DC, USA
 origin: ILatLng = {
  latitude: 38.889931,
  longitude: -77.009003
};
// New York City, NY, USA
destination: ILatLng = {
  latitude: 40.730610,
  longitude: -73.935242
};
displayDirections = true;
zoom = 14;
}


