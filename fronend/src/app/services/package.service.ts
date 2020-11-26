import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(public httpClient:HttpClient) { }

  addPackage(package1)
  {
   return this.httpClient.post("localhost:54216/api/PackageBL/getNewShipment",package1);
  }
}
