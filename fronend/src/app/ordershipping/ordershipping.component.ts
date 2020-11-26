import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';
import { Packages } from '../class/Packages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordershipping',
  templateUrl: './ordershipping.component.html',
  styleUrls: ['./ordershipping.component.scss']
})
export class OrdershippingComponent implements OnInit {

  packageDetails: Packages = new Packages();

  constructor(public packageService: PackageService, public router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.packageService.addPackage(new Packages()).subscribe(res => {
      // Insert()
      if (res == null)
        alert("נא מלא את הפרטים הנחוצים");
      else
        alert("ok")
    }, err => {
      alert("error")
    })
  }
}
