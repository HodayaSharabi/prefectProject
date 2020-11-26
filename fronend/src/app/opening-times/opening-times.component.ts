import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opening-times',
  templateUrl: './opening-times.component.html',
  styleUrls: ['./opening-times.component.scss']
})
export class OpeningTimesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }


  returnHome() {
    this.router.navigate([""]);
  }

}
