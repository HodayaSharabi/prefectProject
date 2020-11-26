import { Component, OnInit } from '@angular/core';
import { Couriers } from '../class/Couriers';
import { UpdateDetailsService } from '../services/update-details.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Customers } from '../class/Customers';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.scss']
})
export class UpdateDetailsComponent implements OnInit {

  showCustomerrDetail: Customers;
  upDateDetails: Customers;
  enteringCustomer: Customers;
  constructor(public updateDetailsService: UpdateDetailsService, public router: Router) { }

  ngOnInit(): void {
    this.upDateDetails = JSON.parse(localStorage.getItem("customer"));
    // this.updateDetailsService.dataRetrieval(this.enteringCustomer.customerId).subscribe(res => {
    //   this.upDateDetails = res;
    // })
  }

  upDateCouriersDetails() {
    this.updateDetailsService.updateDetails(this.upDateDetails).subscribe(res => {
      // Insert()
      if (res == null)
        alert("נא מלא את הפרטים לעדכון");
      else
        alert("הנתונים נשמרו בהצלחה!")
      //לשאול את חיה איך עושים הצגת דיב והעלמת דיב קיים
    }, err => {
      alert("שגיאת רשת!!!")
    })
  }

}
