import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourierLoginService } from '../services/courier-login.service';


@Component({
  selector: 'app-courier-login',
  templateUrl: './courier-login.component.html',
  styleUrls: ['./courier-login.component.scss']
})
export class CourierLoginComponent implements OnInit {

  id: string;
  CourierCode: string;
  // personalCode:string;

  constructor(public courierLoginService: CourierLoginService, public router: Router) { }

  ngOnInit(): void {
  }

  InsertCourier() {
    this.id = this.CourierCode;
    this.courierLoginService.InsertCourierService(this.CourierCode).subscribe(res => {
      if (res == null)
        alert("נא הקש פרטים נחוצים");
      else {
        localStorage.setItem("courier", JSON.stringify(res));
        this.router.navigate(["CourierView"]);
      }
    })
  }

  returnHome() {
    this.router.navigate([""]);
  }

  // Insert() {
  //   this.courierLoginService.Insert(this.personalCode).subscribe(res => {
  //     if (res == null)
  //       alert("error");
  //     else this.router.navigate(["ShippingDetails"]);
  //   })
  // }

}
