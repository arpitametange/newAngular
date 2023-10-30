import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl = 'https://jsonplaceholder.typicode.com/posts/'

  constructor(private htttp :HttpClient) { }
  getpost():  Observable<any>{
   return this.htttp.get(this.postUrl)
  }
  getpostbyid(id:any):Observable<any>{
    return this.htttp.get(this.postUrl+id)
  }
}
