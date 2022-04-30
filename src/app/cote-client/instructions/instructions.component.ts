import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
qId;
quiz;
  constructor(private _route:ActivatedRoute,private _quiz:QuizService,private _router:Router) { }

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

 
  }
  startQuiz(){
    Swal.fire({
      title: 'Do you want to start the quiz?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
      icon:'info',
    }).then((result) => {
      
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    });
     
  }
  
}
