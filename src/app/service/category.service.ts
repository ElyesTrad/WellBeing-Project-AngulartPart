import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }
  getCategorys() {
    return this._http.get('http://localhost:8089/PI/Category/GetAllC')
  }
  addCategory(category:any){
    return this._http.post("http://localhost:8089/PI/Category/addC",category);
  }
deleteuser(id:any){
      return this._http.delete("http://localhost:8081/SpringMVC/servlet/deleteUserById/"+id)
}
updateuserr(id:string,newprofile:any){
  return this._http.put("http://localhost:8081/SpringMVC/servlet/update/"+id,newprofile)
}

}
