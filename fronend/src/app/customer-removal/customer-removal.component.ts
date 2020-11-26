import { Component, OnInit } from '@angular/core';
import { CustomerRemovalService } from '../services/customer-removal.service';
import { Customers } from '../class/Customers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-removal',
  templateUrl: './customer-removal.component.html',
  styleUrls: ['./customer-removal.component.scss']
})
export class CustomerRemovalComponent implements OnInit {

  customer: Customers;

  constructor(public customerRemovalService: CustomerRemovalService, public router: Router) { }

  ngOnInit(): void {

    this.customer = JSON.parse(localStorage.getItem("customer"));
    if (!this.customer) {
      alert("שגיאה! אין משתמש");
    }
  }

  DeleteFromCustomers() {
    this.customerRemovalService.deleteCustomer(this.customer.customerId).subscribe(res => {
      if (res == null)
        alert("Error!!!");
      else {
        alert("נמחקת מרשימת הלקוחות שלנו, נשמח להמשיך לשרת אותך בעתיד...");
        this.router.navigate(["ShipmentsMenu"]);
      }
    })
  }
}

