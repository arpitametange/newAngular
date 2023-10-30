import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  userrname
  constructor(private p:MyserviceService) {
    this.p.subdkjdh.subscribe(res=>{
      console.log(res);
      // this.userrname=res
      
    })
   }

  ngOnInit() {
  }
  getclick(val){
    this.userrname=val.value
    this.p.subdkjdh.next(val.value)
      }
}
