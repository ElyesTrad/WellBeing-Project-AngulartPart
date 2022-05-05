import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchievementsDetailsService {

  constructor(private http : HttpClient) { }
  public getAchievement(idAchievements:number){
    return this.http.get("http://localhost:8089/Evaluation/retrieve-AchievementsById/" +idAchievements);
  }
}
