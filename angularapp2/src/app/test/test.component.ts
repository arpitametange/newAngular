import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ServiceService } from "../service.service";

@Component({
    selector:"app-test",
    templateUrl:'./test.component.html',
    styleUrls:['./test.component.css']
})
export class testComponent implements OnInit  {
// id:number=12
//     @Input() inputt :string
//     ngOnInit(): void {
//         console.log( this.inputt);
//     }
//     @Output() outputname:EventEmitter<string>=new EventEmitter<string>();
//     methodd(){
//         this.outputname.emit("this is my bad");
//     }

@Input() inputName:string

constructor(private serviece:ServiceService){

}

// @Output() outputNamew:EventEmitter<string>=new EventEmitter<string>()

// functionNew(){
//     this.outputNamew.emit("this is the emmiter")
    
// }

@Output() should:EventEmitter<string>=new EventEmitter<string>()
shouldFun(){
    this.should.emit("should function")
}

@Input() shouldinput:string;


ngOnInit(): void {
    console.log(this.inputName);
    console.log(this.shouldinput);
    
    this.createfun()

}


createfun(){
let obj={
    id:new Date().getTime(),
    title:'this is the title',
    body:'this is the body'
}

    this.serviece.newfun(12,obj).subscribe(res=>{
        console.log('****************/*/**/*this is the updated fun',res);
        
    })
}
}


