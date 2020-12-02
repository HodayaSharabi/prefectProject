import { Injectable } from '@angular/core';
import { Couriers } from '../class/Couriers';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourierLoginService {
  
  constructor(public httpClient:HttpClient) { }

  InsertCourierService(CourierCode): Observable<Couriers>
  {
    return this.httpClient.get<Couriers>("http://localhost:54216/api/Courier/loginCourier/"+CourierCode+'/');
  }
}
