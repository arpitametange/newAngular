import { Component, OnInit } from '@angular/core';
import { AddtocardService } from './addtocard.service';
import { CardbucketService } from './cardbucket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public totalItem:number=0
  constructor(private service:AddtocardService,private cardservice:CardbucketService) { }
  array:any=[]

  ngOnInit() {
    this.service.getalldata().subscribe((res:any)=>{
      console.log('this is the data',res);
      this.array=res
    })
    this.cardservice.getProducts().subscribe(res=>{
     this.totalItem=res.length
    })
  }
  
  addtocart(item:any){
  this.cardservice.addToCard(item)
  }

}