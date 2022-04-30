import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quizz',
  templateUrl: './add-quizz.component.html',
  styleUrls: ['./add-quizz.component.css']
})
export class AddQuizzComponent implements OnInit {

  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:'true',
    category:{
      cid:'',
    },
  
  };
  categories=[];
 
  constructor(private _service:QuizService,private _cat:CategoryService, private _router:Router,private _snack:MatSnackBar) { }

  ngOnInit(): void {

    this._cat.getCategorys().subscribe((data: any)=>{
      this.categories=data;
      //console.log(this.categories);
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error !!','Error loadin data from server ','error');

    }
            );
  }
  addQuiz(){
    if(this.quizData.title.trim()==''|| this.quizData.title==null){
      this._snack.open('Title Required !!','',{
        duration:3000,
      });
      return;
      }
      //call server
      this._service.addQuiz(this.quizData).subscribe((data:any)=>{
        Swal.fire('Succes !!','Quizz is added  successfuly','success')
        this.quizData={
          title:'',
          description:'',
          maxMarks:'',
          numberOfQuestions:'',
          active:'true',
          category:{
            cid:'',
          },
        
        };
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!',' Error while adding quiz','error');
  
      }
      );


  }



    /*formSubmit(){
      if(this.quiz.title.trim()==''|| this.quiz.title==null){
      this._snack.open('Title Required !!','',{
        duration:3000,
      });
      return;
      }
      this._service.addQuiz(this.quiz).subscribe((data:any)=>{
        this.quiz.title='';
        this.quiz.description='';
        Swal.fire('Succes !!','Category is added  successfuly','success');
  
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Server Error','error');
  
      }
      );
  
    }*/
  

}
