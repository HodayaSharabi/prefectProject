import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MadeShipments } from '../class/MadeShipments';
import { Couriers } from '../class/Couriers';

@Injectable({
  providedIn: 'root'
})
export class CouriersDetailsService {

  constructor(public httpClient: HttpClient) { }

  DeleteCourier(courierTz) {
    return this.httpClient.get("http://localhost:54216/api/Courier/deleteCourier/" + courierTz);
  }

  addNewCourier(newCourier) {
    return this.httpClient.get("http://localhost:54216/api/Courier/addCourier/" + newCourier);
  }

  getCouriers(): Observable<Array<Couriers>> {
    return this.httpClient.get<Array<Couriers>>("http://localhost:54216/api/Manager/GetCouriersDetail/");
  }

}
