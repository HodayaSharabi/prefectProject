import { Component, OnInit } from '@angular/core';
import { MadeShipments } from '../class/MadeShipments';
import { Router } from '@angular/router';
import { OrdersMadeService } from '../services/orders-made.service';
import { Customers } from '../class/Customers';
import { Couriers } from '../class/Couriers';

@Component({
  selector: 'app-orders-made',
  templateUrl: './orders-made.component.html',
  styleUrls: ['./orders-made.component.scss']
})
export class OrdersMadeComponent implements OnInit {

  madeShipments: MadeShipments;
  manager: Couriers;
  packages: MadeShipments[] = [];

  constructor(public ordersMadeService: OrdersMadeService, public router: Router) { }

  ngOnInit(): void {
    this.manager = JSON.parse(localStorage.getItem("manager"));
    this.ordersMadeService.getMadeShipmentsFromServer().subscribe(res => {
      console.log(res);
      this.packages = res;
    })
  }

}
