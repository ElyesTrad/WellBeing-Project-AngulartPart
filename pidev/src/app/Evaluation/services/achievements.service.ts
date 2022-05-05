import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { achievements } from '../models/achievements';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  constructor(private http : HttpClient) { }
  public getAllachievements():Observable<achievements[]> {
    return this.http.get<achievements[]>("http://localhost:8089/Evaluation/retrieveAllachievements");
  }
}
