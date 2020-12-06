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
   email: Emailc = new Emailc();
  constructor(public contactUsService: ContactUsService, public router: Router) { }

  ngOnInit(): void {
    this.email.email= "michalicohen55555@gmail.com";
this.email.Subject="מייל מחברת שליחיות ";
this.email.Body="רק בדיקה אם המייל הכן עובד ?? "
    this.contactUsService.sendEmail(this.email).subscribe(res => {console.log("send email!!")})
  }
  SendMasage() {
    this.contactUsService.Insert(this.contactFile).subscribe(res => {
      if (res == null)
        alert("error!!!");
      else
        alert("ההודעה נשלחה בהצלחה!!!");
    })
  }
  sendEmail()
  {
this.email.email= this.contactFile.email;
this.email.Subject="try";
this.email.Body="ahrv nhhk "
    this.contactUsService.sendEmail(this.email).subscribe(res => {console.log("send email!!")})
  }

  returnHome() {
    this.router.navigate([""]);
  }

}
export class Emailc
{
    public  email: string;
    public  Subject: string;
    public  Body: string;
}