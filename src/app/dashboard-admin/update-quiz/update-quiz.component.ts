import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  

  constructor(private _route:ActivatedRoute,private _quiz:QuizService,private _cat:CategoryService,private _router:Router) { }
  qId = 0;
  categories: any;
  quiz: any;
  ngOnInit(): void {
    this.qId=this._route.snapshot.params['idQuiz'];
    //alert(this.qId);
this._quiz.getQuiz(this.qId).subscribe(
  (data:any)=>{
    this.quiz=data;
    console.log(this.quiz)
  },
  (error: any)=>{
    console.log(error);
  }
);
/*this._cat.getCategorys().subscribe(
  (data:any)=>{
    this.categories=data;

  },
   (error: any)=>{
    alert('error in loading categories');
  });
  }
  updateData(){
    //alert('test');

    this._quiz.getQuiz(this.qId).subscribe(
      (data:any)=>{
        Swal.fire('Success !!','quiz updated','success').then((e)=>{
        this._router.navigate(['/dashboardAdmin/quizzes'])
        });
      },
      (error: any)=>{
        Swal.fire('Error !!','error in updating quiz','error');
        console.log(error);
      }
    );*/
  }

}
