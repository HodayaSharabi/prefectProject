import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../class/Customers';

@Injectable({
  providedIn: 'root'
})

export class UpdateNewCustomerService {
  // upDateDetails:Customers=new Customers() ;
  constructor(public httpClient: HttpClient) { }

  updateNewCus(Customers: Customers) {
    return this.httpClient.post("http://localhost:54216/api/Customer/UpdateNewCustomer/", Customers);
  }
}
