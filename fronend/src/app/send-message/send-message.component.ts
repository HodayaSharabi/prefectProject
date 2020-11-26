import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  returnHome() {
    this.router.navigate([""]);
  }
  SendMassage(){
    
  }
}
