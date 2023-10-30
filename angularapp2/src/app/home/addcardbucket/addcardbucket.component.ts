import { Component, OnInit } from '@angular/core';
import { AddtocardService } from '../addtocard.service';
import { CardbucketService } from '../cardbucket.service';

@Component({
  selector: 'app-addcardbucket',
  templateUrl: './addcardbucket.component.html',
  styleUrls: ['./addcardbucket.component.css']
})
export class AddcardbucketComponent implements OnInit {
public product:any=[]
public totalItem:number=0

public grandTotal !:number;
  constructor(private cardservice:CardbucketService) { }

  ngOnInit():void {
    this.cardservice.getProducts().subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cardservice.getTotalPrice()
  })

  this.cardservice.getProducts().subscribe(res=>{
    this.totalItem=res.length
        })
  }

  removeItem(item:any){
this.cardservice.removeCartItem(item)

  }
  emptyCart(){
    this.cardservice.removeAllCard()
  }
}
