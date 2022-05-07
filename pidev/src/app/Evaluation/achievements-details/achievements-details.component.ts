import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AchievementsDetailsService } from '../services/achievements-details.service';


@Component({
  selector: 'app-achievements-details',
  templateUrl: './achievements-details.component.html',
  styleUrls: ['./achievements-details.component.css']
})
export class AchievementsDetailsComponent implements OnInit {
  
  achievements:any ;
  idAchievements :any ;
  public QRcodeData : String ;
  constructor(private activatedRoute: ActivatedRoute, private AchievementsDetailsService : AchievementsDetailsService ) { }

  ngOnInit(): void {
    this.idAchievements = this.activatedRoute.snapshot.paramMap.get('idAchievements');
    let resp =this.AchievementsDetailsService.getAchievement(this.idAchievements);
    resp.subscribe((data) =>this.achievements=data);

    } 
    

  }


