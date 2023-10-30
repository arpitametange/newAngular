import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

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
