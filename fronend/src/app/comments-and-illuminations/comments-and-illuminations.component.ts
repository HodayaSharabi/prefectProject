import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Couriers } from '../class/Couriers';
import { CommentsAndIlluminationsService } from '../services/comments-and-illuminations.service';

@Component({
  selector: 'app-comments-and-illuminations',
  templateUrl: './comments-and-illuminations.component.html',
  styleUrls: ['./comments-and-illuminations.component.scss']
})
export class CommentsAndIlluminationsComponent implements OnInit {

  comments: Comment[] = [];
  manager: Couriers;

  constructor(public commentsAndIlluminationsService: CommentsAndIlluminationsService, public router: Router) { }

  ngOnInit(): void {
    this.manager = JSON.parse(localStorage.getItem("manager"));
    this.commentsAndIlluminationsService.getComments().subscribe(res => {
      this.comments = res;
      // for(var i=0;i<this.comments.length;i++)
      // {
      //   if((this.comments.length)/4)


      // }
    })
  }

}
