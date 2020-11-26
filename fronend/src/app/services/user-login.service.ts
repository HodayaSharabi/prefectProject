import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  ManagerCode:string;
  CourierCode:string;
  CustomerCode:string;

  constructor(public httpClient:HttpClient) { }
  
  InsertManagerS(ManagerCode)
  {
   return this.httpClient.get("http://localhost:54216/api/Manager/loginManager/"+ManagerCode);
  } 
  InsertCourierS(CourierCode)
  {
   return this.httpClient.get("http://localhost:54216/api/Manager/loginManager/"+CourierCode);
  } 
  InsertCustomerS(CustomerCode)
  {
   return this.httpClient.get("http://localhost:54216/api/Manager/loginManager/"+CustomerCode);
  } 
} 
  