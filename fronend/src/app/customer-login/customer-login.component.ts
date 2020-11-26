import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLoginService } from '../services/customer-login.service';

@Component({
  selector: 'app-system-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {

  CustomerCode: String;

  // UpdateDetails:string;
  // MyShipments:string;

  constructor(public customerLoginService: CustomerLoginService, public router: Router) { }

  ngOnInit(): void {
    // if (localStorage.getItem("customer")) {
    //   this.router.navigate(["CustomerView"]);
    // }

  }

  InsertCustomer() {
    this.customerLoginService.InsertCustomerService(this.CustomerCode).subscribe(res => {
      if (res == null)
        alert("נא הקש פרטים נחוצים");
      else {
        localStorage.setItem("customer", JSON.stringify(res));
        this.router.navigate(["CustomerView"]);
      }
    })
  }

  returnHome() {
    this.router.navigate([""]);
  }

  SignApp() {
    this.router.navigate(["UpdateNewCustomer"]);
  }
}
