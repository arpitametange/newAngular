import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertydecorator2',
  templateUrl: './propertydecorator2.component.html',
  styleUrls: ['./propertydecorator2.component.css']
})
export class Propertydecorator2Component implements OnInit {

  constructor() { }
  fun(e){
console.log(e);

  }
  ngOnInit() {
  }
  // property(){
  //   console.log('this is the input property');
    
  // }

}
