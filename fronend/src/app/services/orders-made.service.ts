import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MadeShipments } from '../class/MadeShipments';

@Injectable({
  providedIn: 'root'
})
export class OrdersMadeService {

  constructor(public httpClient: HttpClient) { }

  getMadeShipmentsFromServer(): Observable<MadeShipments[]> {
    return this.httpClient.get<MadeShipments[]>("http://localhost:54216/api/MadeShipments/GetMadeShipments/");
  }
}
