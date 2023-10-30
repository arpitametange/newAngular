import { Component, Input, OnInit, Output } from '@angular/core';
import { Todo2Service } from '../todo2.service';
import { Observable } from 'rxjs';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.css']
})
export class Todo2Component implements OnInit {


  constructor(private service:Todo2Service) { }
@Input() innput:string
  ngOnInit() {
    this.getmethod()
    console.log(this.innput);
    
  }
emptyarray:any=[]
getmethod(){
  this.service.get().subscribe((res)=>{
console.log(res);
this.emptyarray=res

  })
}
cratetodo(){
  let data={
    id:new Date().getTime(),
    name:'ankita'
  }
  this.service.create(data).subscribe((res)=>{
     console.log(res);
     this.getmethod() 
  })
}
removeTodo(id:any){
  this.service.deletemethod(id).subscribe((res)=>{
console.log(res);
this.getmethod() 


  })
}

}
