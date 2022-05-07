import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateachievementsService } from '../services/updateachievements.service';

@Component({
  selector: 'app-updateachievements',
  templateUrl: './updateachievements.component.html',
  styleUrls: ['./updateachievements.component.css']
})
export class UpdateachievementsComponent implements OnInit {
  
  achievements : any ;
  formAchievements : FormGroup ;
  idAchievements : any ;

   constructor(private formBuilder: FormBuilder ,private achievementsservice: UpdateachievementsService,private activatedRoute:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.idAchievements = this.activatedRoute.snapshot.paramMap.get('idAchievements');
    this.achievementsservice.getAchievement(this.idAchievements).subscribe(
      (data)=>{
        this.achievements = data ;
      });

   
  }
  
  updateAchievements(){
     let fd=new FormData ();
     this.activatedRoute.snapshot.params['id']= this.idAchievements;
     let id = this.idAchievements ;
     console.log(id);
     this.achievementsservice.updateAchievements(id,fd).subscribe(
       ()=>{alert("user updated");
      this.router.navigateByUrl("dashboardachievements");
    }
     )
      
  }
  

}
