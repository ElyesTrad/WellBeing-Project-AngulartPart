import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Commentaire} from "../Model/Commentaire";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  url = environment.url + '/comment';

  addComment(comment: any, idEvent: any, idUser: any) {
    return this.http.post('http://localhost:8085' + '/comment/addCommentAndAffect/' + idEvent + "/" + idUser, comment)
  }

  getComments() {
    return this.http.get<Commentaire>('http://localhost:8085' + '/comment/retrieveAllComments');
  }

deleteComment(id: any){
return  this.http.delete('http://localhost:8085' + '/comment/deleteComment/' +id)
}
}
