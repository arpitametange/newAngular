import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor() { }

  

  


  @Input() nameforinput:string;
  
  
  ///databinding
  sirname="ku.Arpita Vilas Metange"

  //event binding
  eventt(f){
console.log(f.target.value);

  }
  //input
  @Input() another:string;

@Output() outputdatabinding:EventEmitter<string>=new EventEmitter<string>()


@Input() infut:string;
ngOnInit() {
  console.log(this.nameforinput);
  console.log(this.another);
  console.log(this.infut);
  
  
}
@Output() outuu:EventEmitter<string>=new EventEmitter<string>()
funoutput(){
  this.outuu.emit("this  is the emitter")
}

}
