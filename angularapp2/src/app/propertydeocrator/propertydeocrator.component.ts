import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-propertydeocrator',
  templateUrl: './propertydeocrator.component.html',
  styleUrls: ['./propertydeocrator.component.css']
})
export class PropertydeocratorComponent implements OnInit {
  // @Output() should:EventEmitter<string>=new EventEmitter<string>()
funceven(){
  // this.should.emit('this is th e emiitter')
}
// @Input() InputEvent:string;
  constructor() { }
  ngOnInit() {
    // console.log(this.InputEvent);
    
  }
  selected:string
  getselected(g){
this.selected=g.target.value
  }
  ifstate=false
  arrya=[{id:1,name:'arpita'},
         {id:2,name:'ankita'},
        {id:3,name:'shamra'}
        ]

}
