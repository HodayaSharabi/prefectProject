import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CouriersComments } from '../class/CouriersComments';

@Injectable({
  providedIn: 'root'
})
export class CourierCommentsService {

  constructor(public httpClient: HttpClient) { }

  getComments(courierId): Observable<CouriersComments[]> {
    return this.httpClient.get<CouriersComments[]>("http://localhost:54216/api/Comments/GetCommentsToCourier/" + courierId);
  }

}
