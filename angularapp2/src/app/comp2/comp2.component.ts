import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

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
