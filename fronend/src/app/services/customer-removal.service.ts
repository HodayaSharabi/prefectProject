import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerRemovalService {

  constructor(public httpClient: HttpClient) { }

  deleteCustomer(customer) {
    return this.httpClient.get("http://localhost:54216/api/customer/deleteCustomerFromWebsite/" + customer);
  }
}
