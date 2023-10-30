import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Todo2Service {
urltodo="http://localhost:3000/todo2"
  constructor(private https:HttpClient) { }

  get(){
 return this.https.get(this.urltodo)
  }
  create(data:any){
    return this.https.post(this.urltodo,data)
  }
  deletemethod(id:any):Observable<any>{
    let apiurl=`${this.urltodo}/${id}`;
return this.https.delete(apiurl)
  }

}
