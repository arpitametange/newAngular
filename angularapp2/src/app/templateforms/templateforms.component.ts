import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { logWarnings } from 'protractor/built/driverProviders';
import { Classname } from '../model/userwala';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {

  constructor() { }
 userts:Classname;
  ngOnInit() {
  }
  issubmit=false
  valuedefault='@gmail'
  defaultusername='arpitaa'
  onSubmit(val:NgForm):void{
    this.issubmit=true
    this.userts=new Classname()
    this.userts.email1=val.value.group.emailshow
    this.userts.password1=val.value.group.passwordshow
    this.userts.userName=val.value.group.usernameshow

    console.log(val);
    val.reset(this.userts)
    console.log(this.userts);
   
    
  }
}
