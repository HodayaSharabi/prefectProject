import { Component, OnInit } from '@angular/core';
import { Customers } from '../class/Customers';
import { UpdateDetailsService } from '../services/update-details.service';
import { Router } from '@angular/router';
import { UpdateNewCustomerService } from '../services/update-new-customer.service';

@Component({
  selector: 'app-update-new-customer',
  templateUrl: './update-new-customer.component.html',
  styleUrls: ['./update-new-customer.component.scss']
})
export class UpdateNewCustomerComponent implements OnInit {

  newCustomer = new Customers();

  constructor(public updateNewCustomerService: UpdateNewCustomerService, public router: Router) { }

  ngOnInit(): void {
  }

  NewCustomer() {
    this.updateNewCustomerService.updateNewCus(this.newCustomer).subscribe(res => {
      if (res == null)
        alert("נא הקש פרטים נחוצים")
      else {
        alert("ברוך הבא לדוארים!!! שמחים שהצתרפת לשירותינו.")
        this.router.navigate(["CustomerView"]);
      }
    })

  }

}
