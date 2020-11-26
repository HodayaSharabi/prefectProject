import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Couriers } from '../class/Couriers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentsCourierViewService {

  constructor(public httpClient: HttpClient) { }

  update(courier) {
    return this.httpClient.get("http://localhost:54216/api/Courier/updateCourier/" + courier);
  }

  GetCourierListFromServer() {
    return this.httpClient.get("http://localhost:54216/api/Courier/GetCourierList/");

  }

}
