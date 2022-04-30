import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/service/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
  qId: any;
  qTitle:any;
 questions=[];

  constructor(private _route: ActivatedRoute,private _question:QuestionsService,private _snack:MatSnackBar) { }

  ngOnInit(): void {

this.qId=this._route.snapshot.params['idQuiz'];
this.qTitle=this._route.snapshot.params['title'];
//console.log(this.qId);
//console.log(this.qTitle); 
this._question.getQuestinsQuiz(this.qId).subscribe((data:any)=>{
  this.questions=data;
  console.log(data);
  //this.qTitle=data;
},(error)=>{
  console.log(error)
});
}
//deleteQuestion
deleteQuestion(qid: any){
  Swal.fire({
    icon:'info',
    showCancelButton:true,
    confirmButtonText: 'Delete',
    title:'Are you sure, want to delete Question??',
  }).then((result)=>{
if(result.isConfirmed){
  this._question.deleteQuestion(qid).subscribe(
    (data)=>{
this._snack.open('Question Deleted','',{
  duration:3000,
});
this.questions=this.questions.filter((q)=>q.idq!=qid);
    },
    (error)=>{
      this._snack.open('Error in Deleting Questions','',{
        duration:3000,
      });
     console.log(error);
    });
}
  });
}
}
