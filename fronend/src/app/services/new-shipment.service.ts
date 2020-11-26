import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewShipmentService {

  constructor(public httpClient: HttpClient) { }

  getNewShipment(newShipment) {
    return this.httpClient.post("http://localhost:54216/api/Package/getNewPackage", newShipment);
  }
}
