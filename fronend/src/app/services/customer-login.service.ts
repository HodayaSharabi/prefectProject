import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerLoginService {

  constructor(public httpClient: HttpClient) { }

  InsertCustomerService(CustomerCode) {
    debugger
    return this.httpClient.get("http://localhost:54216/api/Customer/loginCustomer/" + CustomerCode);
  }
}
