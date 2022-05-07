import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
    public getuserByName(username :string): Observable<any>{
      return this.http.get("http://localhost:8089/api/user/" +username ) ;

    }
  
}
