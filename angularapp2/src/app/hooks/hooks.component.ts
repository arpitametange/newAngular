import { Component, Input, OnChanges, OnInit, SimpleChanges ,DoCheck, AfterContentInit, ContentChild, ElementRef, AfterContentChecked, AfterViewInit, ViewChild, AfterViewChecked, OnDestroy} from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit ,OnChanges,DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
@Input() input:string
@ContentChild('child',{static:false,} )contentchild:ElementRef 
@ViewChild('childHook',{static:false}) viewchilld:ElementRef
  constructor() {
     console.log('constructor called');
    
   }
  ngOnDestroy(): void {
    console.log('this is the on destroy');
  }
  ngAfterViewChecked(): void {
    this.viewchilld.nativeElement.setAttribute('style',`color${this.input}`)
  }
  ngAfterViewInit(): void {
console.log('hootks componenet AFTER VIEW INIT',this.viewchilld);
// this.viewchilld.nativeElement.setAttribute('style',`color${this.input}`)

  }
  ngAfterContentChecked(): void {
console.log('ngAfterContentChecked===========') 
this.contentchild.nativeElement.setAttribute('style',`color:${this.input}`)

 }
  ngAfterContentInit(): void {
console.log('this will called after contenet in it === ngAfterContentInit',this.contentchild);
// this.contentchild.nativeElement.setAttribute('style',`color:${this.input}`)
  }
   
 

  ngOnInit() {
    console.log('this is the input data',this.input);
    
  }
  ngOnChanges(changes:SimpleChanges): void {
console.log('this is the changes',changes);
for(let t in changes){
const prop=changes[t]
let {currentValue,firstChange,previousValue}=prop
console.log('affter spreading value currentvalue',currentValue);
console.log('affter spreading value firstChange',firstChange);
console.log('affter spreading value previousValue',previousValue);
}
  }

  ngDoCheck(): void {
    console.log('HooksComponent ngDoCheck called.')
    
    // 
   }

 oobs=of('this is the obje')
 obs2=from([1,2,3,4])



  }