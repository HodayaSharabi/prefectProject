import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerLoginService } from '../services/manager-login.service';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.scss']
})
export class ManagerLoginComponent implements OnInit {

  ManagerCode: string;
  // phone:string;

  constructor(public managerLoginService: ManagerLoginService, public router: Router) { }

  ngOnInit(): void {
  }

  returnHome() {
    this.router.navigate([""]);
  }

  InsertManager() {
    this.managerLoginService.InsertManagerS(this.ManagerCode).subscribe(res => {
      if (res == null)
        alert("נא הקש פרטים נחוצים");
      else
        localStorage.setItem("manager", JSON.stringify(res));
      this.router.navigate(["ManagerView"]);
    })
  }

}
