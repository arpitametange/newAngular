import { Component, Input, OnInit, Output } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
name:string="arpita "
  constructor(private el:MyserviceService) { }
  @Input() te;

  ngOnInit() :void{
    console.log(this.te);
    
  }
  parentmethod(d){
console.log('====',d);

  }

OutputName(d:string){
  console.log("kjdfkdfk",d);
  
}
shouldparent(l){
console.log(l);

}
fun="this is should input"

getbutton(){
  this.el.get()
}
}





