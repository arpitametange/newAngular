import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  namesearch:string=''
  constructor() { }

  ngOnInit() {
  }

array=[{
  id:1,
  name:'tv',
  price:"1200"
},
{
  id:2,
  name:'washingmachine',
  price:"1200"
},{
  id:3,
  name:'Lcd',
  price:"1200"
}
,{
  id:4,
  name:'tv',
  price:"1200"
}]
add(d){
  this.array.push({
    id:5,
    name:d,
    price:'1200'
  })
}


}
