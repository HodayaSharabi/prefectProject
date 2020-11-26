import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Couriers } from '../class/Couriers';
import { Observable } from 'rxjs';
import { Customers } from '../class/Customers';

@Injectable({
  providedIn: 'root'
})
export class UpdateDetailsService {

  updateDetailsService(arg0: Couriers) {
    throw new Error("Method not implemented.");
  }
  upDateDetails: Couriers = new Couriers();
  getDetails: Couriers = new Couriers();
  constructor(public httpClient: HttpClient) { }

  addDetails(getDetails) {
    return this.httpClient.get("http://localhost:54216/api/Customer/GetCustomerDetail/" + getDetails);
  }

  updateDetails(UpdateDetailsCourier) {
    return this.httpClient.post("http://localhost:54216/api/Customer/UpdateDetails/", UpdateDetailsCourier);
  }


}
