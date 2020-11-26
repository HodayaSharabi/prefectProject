import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourierLoginService {
  
  constructor(public httpClient:HttpClient) { }

  InsertCourierService(CourierCode)
  {
    return this.httpClient.get("http://localhost:54216/api/Courier/loginCourier/"+CourierCode);
  }
}
