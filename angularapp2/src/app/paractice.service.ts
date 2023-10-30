import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParacticeService  {
url='https://jsonplaceholder.typicode.com/posts/'
  constructor(private http:HttpClient) {
   this. fetch()

   }

  
  getservicedata(body){
 return   this.http.post(this.url,body).subscribe(res=>{
  console.log('this is the subscribe value',res);
  
 }),(error:any)=>{
  console.log(error)},
  ()=>console.log('tjji')}

  
  fetch(){
   return this.http.get(this.url).subscribe(res=>{
    console.log('fetch data===>>',res);
    
   })
  }
update(id,body){

  return this.http.patch(this.url+id,body)
}
delte(id){
  return this.http.delete(this.url+id)
}







}