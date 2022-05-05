import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AchievementsDetailsService } from '../services/achievements-details.service';
import { AchievementsService } from '../services/achievements.service';
import { achievements } from '../models/achievements';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboardachievement',
  templateUrl: './dashboardachievement.component.html',
  styleUrls: ['./dashboardachievement.component.css']
})
export class DashboardachievementComponent implements OnInit {
  searchText :any ;
  dashboardchievements:any ;
  constructor(private dashboardservice: DashboardService) { }
  ngOnInit() {
    let resp =this.dashboardservice.getAllachievements();
    resp.subscribe((data)=>this.dashboardchievements=data);
    } 
  public deleteAchievements(idAchievements:number){
    let resp= this.dashboardservice.deleteAchievements(idAchievements);
    resp.subscribe((data)=>this.dashboardchievements=data);
  }
}
