import { Component, OnInit } from '@angular/core';
import { Couriers } from '../class/Couriers';
import { CouriersDetailsService } from '../services/couriers-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-couriers-details',
  templateUrl: './couriers-details.component.html',
  styleUrls: ['./couriers-details.component.scss']
})
export class CouriersDetailsComponent implements OnInit {

  courierTz: Couriers;
  courier: Couriers;
  couriers: Couriers[] = [];
  newCourier: Couriers[] = [];

  constructor(public couriersDetailsService: CouriersDetailsService, public router: Router) { }

  ngOnInit(): void {
    // this.courier = JSON.parse(localStorage.getItem("courier"));
    this.couriersDetailsService.getCouriers().subscribe(res => {
      console.log(res)
      this.couriers = res;
      console.log(this.courier)
    })

  }

  Delete() {
    this.couriersDetailsService.DeleteCourier(this.courierTz).subscribe(res => {
      if (res == null) {
        alert("Erorr")
      }
      else alert("המשלוחן נמחק מהרשימה");
    })
  }

}
