import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServiceService  {
  url = "https://jsonplaceholder.typicode.com/posts/";

constructor(private el:HttpClient) { }
get(){
  return this.el.get(this.url)
}

newfun(id:any,body:any): Observable<any>{
return this.el.patch(this.url+id,body)
}





}
