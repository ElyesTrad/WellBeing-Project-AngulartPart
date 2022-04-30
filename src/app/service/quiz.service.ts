import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }
  getQuizzes() {
    return this._http.get('http://localhost:8089/PI/Quiz/GetAllQuiz')
  }
  addQuiz(quiz:any){
    return this._http.post("http://localhost:8089/PI/Quiz/addQ",quiz);
  }
  //deleteQuiz
  deleteQuiz(idQuiz){
    
      return this._http.delete("http://localhost:8089/PI/Quiz/DelQuiz/"+idQuiz);
  }
  //get one quiz
  getQuiz(idQuiz){
    return this._http.get("http://localhost:8089/PI/Quiz/GetQuizee/"+idQuiz);
  }
  updateQuiz(quiz:any){
    return this._http.put("http://localhost:8089/PI/Quiz/UpQuiz",quiz);
  }
  getQuizzesOfCategory(cid)
{return this._http.get("http://localhost:8089/PI/Quiz/GetQuizzCat/"+cid);

}
getAllactiveQuizes(){
  return this._http.get("http://localhost:8089/PI/Quiz/GetQuizzValid");
}
GetQuizzValidByCategory(cid){
  return this._http.get("http://localhost:8089/PI/Quiz/GetQuizzValidByCategory/"+cid);
}
}
