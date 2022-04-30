import { Component, OnInit } from '@angular/core';

import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
  quizzes:[];
  
  constructor(private _service:QuizService) { }

  ngOnInit(): void {
    this._service.getQuizzes().subscribe(
      (data: any)=>{
      this.quizzes=data;
      console.log(this.quizzes);
    },
      (error: any)=>{
        console.log(error);
        Swal.fire('Error ||','Error in loadiing data','error');
      }
    );
  }

    deleteQuizz(idQuiz){
      this._service.deleteQuiz(idQuiz).subscribe(
        (data)=>{
          Swal.fire('Success ||','Quiz deleted','success');

        },
        (error)=>{
          Swal.fire('Error ||','Error in deleting quiz','error');
        }
       
      
      );

    }

  }


