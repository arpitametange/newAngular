import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
ulr='http://localhost:3000/todo'
  constructor(private http:HttpClient) { 
  }
delete(id){
  let ur=`${this.ulr}/${id}`
 return this.http.delete(ur)
}

for(){
 return this.http.get(this.ulr)

}

update(body){
let ulr=this.ulr
 return this.http.post(ulr,body)
}
}


