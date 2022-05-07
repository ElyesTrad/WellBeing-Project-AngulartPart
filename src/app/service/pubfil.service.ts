import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PubfilService {

  constructor(private _http:HttpClient) { }
  getPubs() {
    return this._http.get('http://localhost:8088/PI/Publication/GetAllPub')
  }
  AddPost(pub) {
    return this._http.get('http://localhost:8088/PI/Publication/addP',pub)
  }
}
