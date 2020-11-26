import { Component, OnInit } from '@angular/core';
import { UpdateDetailsCourierService } from '../services/update-details-courier.service';
import { Router } from '@angular/router';
import { Couriers } from '../class/Couriers';

@Component({
  selector: 'app-update-details-courier',
  templateUrl: './update-details-courier.component.html',
  styleUrls: ['./update-details-courier.component.scss']
})
export class UpdateDetailsCourierComponent implements OnInit {

  showCustomerrDetail: Couriers;
  upDateDetails: Couriers;
  enteringCustomer: Couriers;
  constructor(public updateDetailsCourierService: UpdateDetailsCourierService, public router: Router) { }

  ngOnInit(): void {
    this.upDateDetails = JSON.parse(localStorage.getItem("courier"));
  }

  upDateCouriersDetails() {
    this.updateDetailsCourierService.addDetails(this.upDateDetails).subscribe(res => {
      // Insert()
      if (res == null)
        alert("נא מלא את הפרטים לעדכון");
      else
        alert("הנתונים נשמרו בהצלחה!")
    }, err => {
      alert("שגיאת רשת!!!")
    })
  }

}
