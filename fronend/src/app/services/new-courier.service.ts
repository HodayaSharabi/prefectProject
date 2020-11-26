import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewCourierService {

  constructor(public httpClient:HttpClient) { }

  // addNewCourier(newCourier) {
  //   this.router.navigate(["CustomerView"]);
  // }
}
