import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent  {
name:string="cindrella"
  
constructor(private p:JsonService){

}
ho(){
  let datta={
    id:12,
    name:'ankita'
  }
  this.p.update(datta).subscribe(res=>{
    console.log('this is th eposr method for json server',res);
    
  })
}
get2(){
  this.p.for().subscribe(res=>{
    console.log('this is the json values',res);
    
  })
}

delete(){
  this.p.delete(12).subscribe(res=>{
    console.log('DELETE',res);
    
  })
}
}
