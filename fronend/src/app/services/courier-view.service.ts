import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapTOCurios } from '../shipping-operations-in-real-time/shipping-operations-in-real-time.component';
import { Observable } from 'rxjs';

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
  getRouterToCourier(c): Observable<MapTOCurios>
  {
    return this.httpClient.put<MapTOCurios>("http://localhost:54216/api/Courier/getRouterToCourier/", c);
     
  }
}
