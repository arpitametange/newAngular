import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  get='this is the get method of yours**********'
  getoutput(r){
   console.log(r);
  }
  utube='this is the youtube'
}
