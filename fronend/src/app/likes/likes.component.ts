import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  SendMassage() {
    this.router.navigate(["SendMessage"]);
  }

  returnHome() {
    this.router.navigate([""]);
  }

}
