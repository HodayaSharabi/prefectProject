import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Couriers } from '../class/Couriers';

@Injectable({
  providedIn: 'root'
})
export class UpdateDetailsCourierService {

  updateDetailsService(arg0: Couriers) {
    throw new Error("Method not implemented.");
  }

  upDateDetails: Couriers = new Couriers();
  getDetails: Couriers = new Couriers();

  constructor(public httpClient: HttpClient) { }

  addDetails(UpdateDetailsCourier) {
    return this.httpClient.post("http://localhost:54216/api/Courier/updateCourier/", UpdateDetailsCourier);
  }

  dataRetrieval(getDetails) {/////////לבדוק מה עם הניתוב הוא שייך ללקוח.........
    return this.httpClient.get("http://localhost:54216/api/Customer/GetCustomerDetail/", getDetails);
  }

}
