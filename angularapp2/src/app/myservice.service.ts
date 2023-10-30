import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
   subdkjdh=new Subject<any>()

url='https://jsonplaceholder.typicode.com/posts/'
  constructor(private httpsuser:HttpClient) { }
  get(){
    console.log('this is the get');
    
  }
  //getting all id
  getUrl(){
    return this.httpsuser.get(this.url)
  }

  ///for getting one id
  getbyId(id:any){
    return this.httpsuser.get(this.url+id)
  }
//
update(id:any, body:any){
  return this.httpsuser.put(this.url+id,body)
}

deletepost(id:any){
  return this.httpsuser.delete(this.url+id)
}

createpost(body){
return this.httpsuser.post(this.url,body)
}
}

