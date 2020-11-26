import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-branches',
  templateUrl: './our-branches.component.html',
  styleUrls: ['./our-branches.component.scss']
})
export class OurBranchesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  returnHome() {
    this.router.navigate([""]);
  }

}
