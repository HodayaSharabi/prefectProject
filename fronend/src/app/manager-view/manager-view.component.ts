import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.scss']
})
export class ManagerViewComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  returnHome() {
    this.router.navigate([""]);
  }
}
