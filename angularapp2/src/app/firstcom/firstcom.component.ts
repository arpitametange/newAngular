import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-firstcom',
  templateUrl: './firstcom.component.html',
  styleUrls: ['./firstcom.component.css']
})
export class FirstcomComponent implements OnInit {
  userrname
  DAY='friday'
  mybirthday=new Date(1999,7,1)
  price='12'

  constructor(private p:MyserviceService) { 
this.p.subdkjdh.subscribe(res=>{
  console.log(res);
  this.userrname=res
  
})
  }

  ngOnInit() {
  }
  getclick(val){
this.userrname=val.value
this.p.subdkjdh.next(val.value)
  }
}
