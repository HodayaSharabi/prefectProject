import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enlightenment-and-comments',
  templateUrl: './enlightenment-and-comments.component.html',
  styleUrls: ['./enlightenment-and-comments.component.scss']
})
export class EnlightenmentAndCommentsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }


  returnHome() {
    this.router.navigate([""]);
  }

}
