import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day-to-day-deliveries',
  templateUrl: './day-to-day-deliveries.component.html',
  styleUrls: ['./day-to-day-deliveries.component.scss']
})
export class DayToDayDeliveriesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  returnHome() {
    this.router.navigate([""]);
  }

}
