import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  username;
  constructor(private service:SubjectService) {
    this.service.sub1.subscribe( res =>{
console.log(res);
this.username=res

    })
   }
  ngOnInit() {
  }
  clickbutton(va){
   console.log(va.value);
  this.service.sub1.next(va.value)
  }

}
