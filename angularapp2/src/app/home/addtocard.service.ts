import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AddtocardService {
ulr='https://fakestoreapi.com/products'
  constructor(private http:HttpClient) { }
  getalldata(){
   return this.http.get<any>(this.ulr).pipe(map((res:any)=>{
    return res
   }))
  }
}
