import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {User} from "../Model/User";

@Injectable({
  providedIn: 'root'
})
export class AuthentifService {

  constructor(private http: HttpClient) {
  }

  private helper = new JwtHelperService();
  public id: string;
  token: string
  user: User;

  GetUser() {
    // @ts-ignore
    this.token = localStorage.getItem('jwt');
    console.log(this.token)

    const decodedToken = this.helper.decodeToken(this.token);
    console.log(decodedToken.sub)

    return this.http.get<User>('http://localhost:8085/event/UserByUserName/' + decodedToken.sub);
  }

}
