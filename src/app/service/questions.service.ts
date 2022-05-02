import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private _http:HttpClient) { }
  getQuestinsQuiz(idQuiz: string) {
    return this._http.get("http://localhost:8089/PI/Question/GetQuestion/"+idQuiz);
  }
  getQuestionsOfQuiz(idQuiz: string) {
    return this._http.get("http://localhost:8089/PI/Question/GetQuestionQuiz/"+idQuiz);
  }
  getAllQuestionsOfQuiz(idQuiz: string) {
    return this._http.get("http://localhost:8089/PI/Question/GetQuestionQu/all/"+idQuiz);
  }
  addQuestion(question:any){
    return this._http.post("http://localhost:8089/PI/Question/addQue",question);
  }
  deleteQuestion(idq){
    return this._http.delete("http://localhost:8089/PI/Question/DelQue/"+idq);
  }
  evalQuiz(questions){
    return this._http.post("http://localhost:8089/PI/Question/evalQuiz",questions);
  }
}
