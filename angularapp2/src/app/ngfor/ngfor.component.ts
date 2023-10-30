import { Component, OnInit } from '@angular/core';
import { ClassName } from '../model/tickets';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
arrayName:ClassName[]=[
  { no:12,
    name:'kdfl',
    date:12,
    id:12},
    { no:89,
      name:"aapira",
      date:13,
      id:11},
      { no:12,
        name:'number',
        date:78,
        id:90}
]
}
