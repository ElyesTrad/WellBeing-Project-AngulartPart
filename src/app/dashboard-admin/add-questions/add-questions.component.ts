import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/service/questions.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  public Editor = ClassicEditor;
  qId;
  qTitle;
  question  ={
    quiz:{},
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  };

  constructor(private _route:ActivatedRoute,private _question:QuestionsService) { }

  ngOnInit(): void {
    this.qId=this._route.snapshot.params['idQuiz'];
    this.qTitle=this._route.snapshot.params['title'];
    this.question.quiz['qId']=this.qId;

  }
  formSubmit(){
    //alert('testing');
    if(this.question.content.trim()==''||this.question.content==null){
      return ;
    }
    if(this.question.option1.trim()==''||this.question.option1==null){
      return ;
    }
    if(this.question.option2.trim()==''||this.question.option2==null){
      return ;
    }
    if(this.question.answer.trim()==''||this.question.answer==null){
      return ;
    }
    this._question.addQuestion(this._question).subscribe((data:any)=>
    {
      Swal.fire('Success','Question Added.Added Another one','success');
      this.question.content='';
      this.question.option1='';
      this.question.option2='';
      this.question.option3=''; 
      this.question.option4='';
      this.question.answer='';
    },
    
    (error)=>{
      Swal.fire('Error','Error in Addingn Question','error');
    }
    );
  }

}
