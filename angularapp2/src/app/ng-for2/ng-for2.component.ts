import { Component, OnInit } from '@angular/core';
import { Cl, ClassName2 } from '../model/tickets';

@Component({
  selector: 'app-ng-for2',
  templateUrl: './ng-for2.component.html',
  styleUrls: ['./ng-for2.component.css']
})
export class NgFor2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  yourName=false
  array:ClassName2[]=[
   {
    name:'arpita',
    id:12,
    description:"ngFor"
   },
   {
    name:'arpita1',
    id:121,
    description:"ngFor1"
   },
   {
    name:'arpita2',
    id:122,
    description:"ngFor2"
   }

  ]

  newArray:Cl[]=[
    {
      name1:"cindrellaa"
    }
  ]
}
