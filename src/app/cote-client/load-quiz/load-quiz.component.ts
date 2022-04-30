import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
catId;
quizzes;
  constructor(private _route:ActivatedRoute,private _quiz:QuizService) { }

  ngOnInit(): void {
   
    this._route.params.subscribe((params)=>{
      this.catId=params['catId'];
      if(this.catId==0){
        console.log("Load all the quiz");
        this._quiz.getAllactiveQuizes().subscribe((data:any)=>{
          this.quizzes=data;
          console.log(this.quizzes);
        },
        (error)=>{
          console.log(error);
          alert("error in loading all quiz")
        });
      }else{
        console.log("load specifique quiz");
        this._quiz.GetQuizzValidByCategory(this.catId).subscribe((data:any)=>{
          this.quizzes=data;
        },
        (error)=>{
          alert("alert in loading quiz data");
        });
       
      }
    }
    )
    
  }

}
