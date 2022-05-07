import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AchievementsService } from '../services/achievements.service';
import { achievements } from '../models/achievements';


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})

export class EvaluationComponent implements OnInit {
  Achievement : any;
  AchievementId : any;
  constructor(private activatedRoute: ActivatedRoute, private service: AchievementsService ){}
  ngOnInit(): void {
    this.AchievementId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.AchievementId);
    this.Achievement = this.service.getAllachievements().subscribe(a=>{this.Achievement=a.find(x=>x.idAchievements==this.AchievementId)});
  console.log(this.Achievement);
  }
  
}
