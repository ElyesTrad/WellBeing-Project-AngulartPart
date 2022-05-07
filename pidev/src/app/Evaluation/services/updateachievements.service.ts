import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { achievements } from '../models/achievements';

@Injectable({
  providedIn: 'root'
})
export class UpdateachievementsService {

  constructor(private http : HttpClient) {}
    public getAchievement(idAchievements:number){
      return this.http.get("http://localhost:8089/Evaluation/retrieve-AchievementsById/" +idAchievements);

   }
   public updateAchievements(id:number,fd:FormData) : Observable<achievements>{
     return this.http.put<achievements>("http://localhost:8089/Evaluation/Update-Achievements" +id,fd)
   }
  }
