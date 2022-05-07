import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/service/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  qid;
 questions;
 marksGot=0;
 correctAnswers=0;
 attempted=0;
 isSubmit=false;
 timer:any;
  constructor(private locationSt:LocationStrategy,private _route:ActivatedRoute,private _question:QuestionsService) { }

  ngOnInit(): void {
this.preventBackButton();
this.qid=this._route.snapshot.params['idQuiz'];
console.log(this.qid);
this.loadQuestions();
  }
  loadQuestions(){
    this._question.getQuestinsQuiz(this.qid).subscribe((data:any)=>
    {
    // console.log(data);
    // console.log(this.questions[0]);
     this.questions=data;
     this.timer=this.questions.length * 2 * 60;
     this.questions.forEach( (q)=> {
         q['givenAnswer'] = '';
       });

       
       console.log(this.questions); 
       this.startTimer();
    },
    (error)=>{
console.log(error);
Swal.fire("Error","Error in loading questions of Quiz",'error');
    }
    );
  }
preventBackButton(){
  history.pushState(null,null,location.href);
  this.locationSt.onPopState(()=>{
    history.pushState(null,null,location.href);
  });
}
submitQuiz(){
  Swal.fire({
    title: 'Do you want to submit the quiz?',
    showDenyButton: true,
    confirmButtonText: 'Submit',
 
    icon:'info',
  }).then((e) => {
    
    if (e.isConfirmed) {
     //calculation
    this.evalQuiz();
    } 
  });

}
startTimer(){
  let t:any=window.setInterval(()=>{
    //code
    if(this.timer<=0){
      this.evalQuiz();
      clearInterval(t);
    }else{
this.timer--;
    }
  },1000)
}
getFormattedTime(){
  let mm= Math.floor(this.timer /60);
  let ss=this.timer-mm*60;
  return `${mm} min : ${ss} sec`;
}
evalQuiz(){
  
this.isSubmit=true;
 this.questions.forEach(q=>{
  if(q.givenAnswer==q.answer)    {
    this.correctAnswers++;
  
    //let marksSingle=this.questions[0].quiz.maxMarks ;
    //this.marksGot +=marksSingle;
  }
      if(q.givenAnswer.trim() != ''){
    this.attempted++;
     
  }
    
});
console.log('Correct Answers :' + this.correctAnswers);
console.log('attempted :'+ this.attempted);
console.log('Marks Got : ' + this.marksGot);
//console.log(this.questions[0]);

 console.log(this.questions);
 // this._question.evalQuiz(this.questions).subscribe((data:any)=>{
  //   console.log(data );
  //     this.marksGot=data.marksGot;
  //     this.correctAnswers=data.correctAnswers;
  //    this.attempted=data.attempted;
  //    this.isSubmit=true;


  // },
  // (error)=>{
  //   console.log(error);
  // });
}
}
