import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Packages } from '../class/Packages';

@Injectable({
  providedIn: 'root'
})
export class OrdershippingService {

  constructor(public httpClient: HttpClient) { }

  Insert(packageDetails) {
    return this.httpClient.post("http://localhost:54216/api/Package/GetPackageDetails", packageDetails);
  }
}
