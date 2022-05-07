import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentfilService {

  constructor(private _http: HttpClient) { }
  getComments() {
    return this._http.get('http://localhost:8088/PI/Comment/GetAllCm')
  }
  getCommPub(idph) {
    return this._http.get('http://localhost:8088/PI/Comment/GetAllCmPb/'+idph)
  }
}
