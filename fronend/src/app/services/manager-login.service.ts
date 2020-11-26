import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerLoginService {

  constructor(public httpClient:HttpClient) { }
  
  InsertManagerS(ManagerCode)
  {
   return this.httpClient.get("http://localhost:54216/api/Manager/loginManager/"+ManagerCode);
  } 
}
