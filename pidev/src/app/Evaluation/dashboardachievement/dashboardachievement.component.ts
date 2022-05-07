import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-dashboardachievement',
  templateUrl: './dashboardachievement.component.html',
  styleUrls: ['./dashboardachievement.component.css']
})
export class DashboardachievementComponent implements OnInit {
  @ViewChild('content',{static:false}) el!:ElementRef ;
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
  makePDF(){
    let pdf = new jsPDF ('p','pt','a4') ;
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("achievements.pdf");
      }
    });
    
  }
}
