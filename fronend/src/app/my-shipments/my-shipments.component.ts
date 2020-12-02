import { Component, OnInit } from '@angular/core';
import { MyShipmentsService } from '../services/my-shipments.service';
import { Router } from '@angular/router';
import { Customers } from '../class/Customers';
import { MadeShipments } from '../class/MadeShipments';

@Component({
  selector: 'app-my-shipments',
  templateUrl: './my-shipments.component.html',
  styleUrls: ['./my-shipments.component.scss']
})
export class MyShipmentsComponent implements OnInit {
  packageId: number;
  customer: any;
  packages: MadeShipments[] = [];

  constructor(public myShipmentsService: MyShipmentsService, public router: Router) { }

  ngOnInit(): void {
    this.customer = JSON.parse(localStorage.getItem("customer"));
    this.myShipmentsService.getMadeShipmentsFromServer(this.customer.CustomerId).subscribe(res => {
      if (res == null)
        alert("Error!!!!!");
      else
        this.packages = res;
    })

    //   //call function get list packages
    //this.customer.CourierIdCus
    //   //this.packages=
    // this.customer = this.router.paramMap.subscribe(params => {
    //   this.myShipmentsService.getMadeShipmentsFromServer(this.customer).subscribe(data => {
    //     let userId = +params.get('customer') 
    //     if (this.customer != undefined) {
    //       this.allTasks = data.filter(function (e, i) {
    //         return e.userId == userId 
    //       }) 
    //     }
    //   }  
    //   // else this.allTasks = data;  
    // }); 
  }

  // EnterToShipingDetails() {
  //   this.myShipmentsService.ShipmentsService(this.packageId).subscribe(res => {
  //     if (res == null)
  //       alert("אין שליחויות");
  //     else {
  //       localStorage.setItem("customer",JSON.stringify(res));
  //       // this.myShipmentsService.httpClient.get(customer.);
  //     }
  //   })
  // }


  NewShipment() {
    this.router.navigate(["MyShipments/NewShipment"]);
  }

  // ngOnDestroy() {  
  //   this.subscription.unsubscribe();  
  // } 
}


