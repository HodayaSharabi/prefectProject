import { Component, OnInit } from '@angular/core';
import { Packages } from '../class/Packages';
import { Router } from '@angular/router';
import { ShippingSelectionService } from '../services/shipping-selection.service';
import { Couriers } from '../class/Couriers';

@Component({
  selector: 'app-shipping-selection',
  templateUrl: './shipping-selection.component.html',
  styleUrls: ['./shipping-selection.component.scss']
})
export class ShippingSelectionComponent implements OnInit {
  packages: Packages[] = [];
  packageSelection: Packages;
  courier: Couriers;
  package: Packages;
  constructor(public shipingSelectionService: ShippingSelectionService, public router: Router) { }

  ngOnInit(): void {
    this.courier = JSON.parse(localStorage.getItem("courier"));
    this.shipingSelectionService.getShitpments().subscribe((res: Packages[]) => {
      if (res == null)
        alert("אין משלוחים זמינים");
      else
        this.packages = res;
    })
  }

  // SelectPackage() {
  //   this.shipingSelectionService.getSelectionShipment(this.courier, this.package).subscribe(res => {
  //     if (res == null) {
  //       alert("לא נבחר משלוח");
  //     }
  //     else
  //       alert("נבחר משלוח יחיד");//לשנות להצגת כפתור
  //   })
  // }

}
