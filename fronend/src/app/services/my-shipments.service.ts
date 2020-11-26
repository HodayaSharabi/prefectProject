import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MadeShipments } from '../class/MadeShipments';

@Injectable({
  providedIn: 'root'
})
export class MyShipmentsService {

  constructor(public httpClient: HttpClient) { }

  // ShipmentsService(id) {
  //   return this.httpClient.get("http://localhost:54216/api/MadeShipments/GetMadeShipmentByUserId/"+id);
  // }

  getMadeShipmentsFromServer(customerId): Observable<MadeShipments[]> {
    return this.httpClient.get<MadeShipments[]>("http://localhost:54216/api/MadeShipments/GetMyShipmentByUserId/" + customerId);
  }
}