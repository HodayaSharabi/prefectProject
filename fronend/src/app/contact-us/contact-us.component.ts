import { Component, OnInit } from '@angular/core';
import { Contact } from '../class/Contact';
import { ContactUsService } from '../services/contact-us.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactFile: Contact = new Contact();

  constructor(public contactUsService: ContactUsService, public router: Router) { }

  ngOnInit(): void {
  }
  SendMasage() {
    this.contactUsService.Insert(this.contactFile).subscribe(res => {
      if (res == null)
        alert("error!!!");
      else
        alert("ההודעה נשלחה בהצלחה!!!");
    })
  }

  returnHome() {
    this.router.navigate([""]);
  }

}
