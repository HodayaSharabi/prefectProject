import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShippingSelectionService {


  constructor(public httpClient: HttpClient) { }

  getShitpments() {
    return this.httpClient.get("http://localhost:54216/api/Courier/shipingSelection");
  }

  // getSelectionShipment(courier, package) {
  //   return this.httpClient.get("http://localhost:54216/api/Courier/GetSelectionShipment" + courier, package)
  // } 

}
