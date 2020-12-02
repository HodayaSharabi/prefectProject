import { Component, OnInit } from '@angular/core';
import { CourierCommentsService } from '../services/courier-comments.service';
import { Couriers } from '../class/Couriers';
import { CouriersComments } from '../class/CouriersComments';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comments-to-courier',
  templateUrl: './comments-to-courier.component.html',
  styleUrls: ['./comments-to-courier.component.scss']
})

export class CommentsToCourierComponent implements OnInit {

  courier: any;
  commentsList: CouriersComments[] = [];

  constructor(public courierCommentsService: CourierCommentsService, public router: Router) { }

  ngOnInit(): void {
    this.courier = JSON.parse(localStorage.getItem("courier"));
    this.courierCommentsService.getComments(this.courier.CourierId).subscribe(res => {
      if (res == null)
        alert("Error!!!");
      else
        this.commentsList = res;
    })
  }
}
