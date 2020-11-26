import { Component, OnInit } from '@angular/core';
import { CustomerViewService } from '../services/customer-view.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Customers } from '../class/Customers';
import { MadeShipments } from '../class/MadeShipments';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  UpdateDetails: string;
  MyShipments: string;
  customer: Customers;
  packages: MadeShipments[] = [];

  constructor(public CustomerViewService: CustomerViewService, public router: Router) { }

  ngOnInit(): void {
    this.customer = JSON.parse(localStorage.getItem("user"));
    //call function get list packages
    //this.customer.CourierIdCus
    //this.packages=
  }
  returnHome() {
    this.router.navigate([""]);
  }
}
