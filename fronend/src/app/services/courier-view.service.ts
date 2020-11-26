import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourierViewService {

  constructor(public httpClient: HttpClient) { }

  getMadeShipmentsFromServer(courier) {
    return this.httpClient.get("http://localhost:54216/api/MadeShipments/GetMadeShipmentByUserId/" + courier);
  }

  ViewShippingRouteService(courier) {
    return this.httpClient.get("http://localhost:54216/api/Courier/GetTrack/" + courier);
  }

  update(courier) {
    return this.httpClient.get("http://localhost:54216/api/Courier/updateCourier/" + courier);
  }
  getMyShipments(courier) {
    return this.httpClient.get("http://localhost:54216/api/Courier/getMyShipments/" + courier);
  }
}
