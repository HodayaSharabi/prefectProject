import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Couriers } from '../class/Couriers';
import { MapTOCurios } from '../shipping-operations-in-real-time/shipping-operations-in-real-time.component';

@Injectable({
  providedIn: 'root'
})
export class ShippingOperationsInRealTimeService {

  constructor(public httpClient: HttpClient) { }

  getCouriers(): Observable<Couriers[]> {
    return this.httpClient.get<Couriers[]>("http://localhost:54216/api/Manager/GetCouriersDetail/");
  }
  getCouriersDetailMaps():Observable<MapTOCurios[]>
  {
    return this.httpClient.get<MapTOCurios[]>("http://localhost:54216/api/Manager/GetCouriersDetailMaps/");
  }
  getPackageAddress() {
    return {
      IdAddress: 0,
      IdPackage: 0,
      SourcePackageLon: 32.0761814,
      SourcePackageLat: 34.8327112,
      DestinetionPackageLon: 31.7606638,
      DestinationPackageLat: 35.199288
    }
  }

} 
