import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class
  ContactUsService {

  constructor(public httpClient: HttpClient) { }

  Insert(contactFile) {
    console.log(contactFile)
    return this.httpClient.post("http://localhost:54216/api/Customer/GetContactFile", contactFile);
  }

}
