import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-assi',
  templateUrl: './ng-for-assi.component.html',
  styleUrls: ['./ng-for-assi.component.css']
})
export class NgForAssiComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  // countries=[
  //   {id:'1',name:'India'},
  //   {id:'2',name:'United State'}
  //  ]
  //  arrStates: Array<any>= [
  //   {id:'s1',parentId:'2',name:'California'},
  //   {id:'s2',parentId:'2',name:'Texas'},
  //   {id:'s3',parentId:'2',name:'Florida'},
  //   {id:'s4',parentId:'1',name:'Maharashtra'},
  //   {id:'s5',parentId:'1',name:'Goa'},
  //   {id:'s6',parentId:'1',name:'Chennai'},
  //  ]

  //  states : Array<any> = [];

  // onClick(val: any) {
  //   this.states = this.arrStates.filter(c => c.parentId == val.target.value);
  //  }


country1=[{id:'1',stateName:'India'},
   {id:'2',stateName:'USA'}]
state12:Array<any>=[{id:'s1',parentid:'1',stateName:'gurugram'},
                    {id:'s2',parentid:'1',stateName:'maharashtra'},
                    {id:'s3',parentid:'1',stateName:'gujrat'},
                    {id:'s4',parentid:'2',stateName:'california'},
                    {id:'s5',parentid:'2',stateName:'taxes'},
                    {id:'s6',parentid:'2',stateName:'florida'}
]
empty: Array<any> = [];
funfor(vario:any){
this.empty=this.state12.filter(c => c.parentid == vario.target.value)
}

}


