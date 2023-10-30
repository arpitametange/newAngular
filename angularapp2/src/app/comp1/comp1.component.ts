import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  arrayobj=[{}]
  username;
  constructor(private service:SubjectService) {
    this.service.sub1.subscribe( res =>{
console.log(res);
this.username=res
this.arrayobj=res

    })
   }
  ngOnInit() {
  }
  clickbutton(va){
   console.log(va.value);
  this.service.sub1.next(va.value)
  }
}
