import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { AchievementsService } from '../services/achievements.service';
import { Router } from '@angular/router';
import { achievements } from '../models/achievements';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  
   allachievements:any ;
   a : achievements[] ;
  constructor(private achievementsService: AchievementsService) { }
  ngOnInit() {
    let resp =this.achievementsService.getAllachievements();
    resp.subscribe((data)=>this.allachievements=data);
    } 

    
  
}
