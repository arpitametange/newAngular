import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor() { }
  @Input() inputtname:string;
  @Output() outputtName:EventEmitter<string>= new EventEmitter<string>()
stand(){
  this.outputtName.emit('this is the emittter 3')
}
  ngOnInit() {
    console.log(this.inputtname);
    
  }
  includeNumber=false;
  includeSymbol=false;
  includeAlphabet=false;
  lenght=0
  password=''
  inputEvent(val:string){
    let parsevalue=parseInt(val)
    this.lenght=parsevalue
  }
  changeSym(){
    this.includeSymbol=!this.includeSymbol
  }
  changeNumber(){
    this.includeNumber=!this.includeNumber
  }
  changeAlphabet(){
    this.includeAlphabet=!this.includeAlphabet
  }
  onclick(){
   var numbers='1234567890'
   var alphabet='abcdefghijklmnopqrstuvwxyz'
   var symbols='!@#$%^&*()'
    var  validChar=''
if(this.includeAlphabet){
  validChar+=alphabet
}
if(this.includeNumber){
  validChar+=numbers
}
if(this.includeSymbol){
  validChar+=symbols
}
 let generate=''
 for (let i = 0; i < this.lenght; i++) {
  let index=Math.floor(Math.random()*validChar.length)
  generate+=validChar[index]
 }
  this.password=generate
  }
}
