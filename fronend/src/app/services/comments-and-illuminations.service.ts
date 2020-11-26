import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsAndIlluminationsService {

  constructor(public httpClient: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>("http://localhost:54216/api/Comments/GetCommentsToManager/");
  }

}
