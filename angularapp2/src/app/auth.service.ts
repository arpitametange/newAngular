import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  savedata(body:any){
 return   this.http.post(`http://localhost:3000/signupUsers`,body)
  }
  getinfor(username,password)
{
if(username=="arpita@gmail.com" && password=="arpita123"){
  localStorage.setItem('username','arpita')
  return true
}
else{
  return false
}
}
}
