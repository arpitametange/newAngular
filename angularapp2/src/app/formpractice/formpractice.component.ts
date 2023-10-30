import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ParacticeService } from '../paractice.service';
import { Observable } from 'rxjs';
import { JsonService } from '../json.service';
import { MyserviceService } from '../myservice.service';
import { User } from './username';
import { error } from 'console';

@Component({
  selector: 'app-formpractice',
  templateUrl: './formpractice.component.html',
  styleUrls: ['./formpractice.component.css']
})
export class FormpracticeComponent implements OnInit {
  issubmitted
  constructor(){
    this.createform()
  }
  ngOnInit(): void {
  }
  // username:User
  // onSubmit(val:NgForm):void{
  //   console.log(val);
  // this.issubmitted=true
  // this.username=new User()
  // this.username.userName=val.value.username
  // this.username.Email=val.value.email
  // }
  
  myform:FormGroup
  createform(){
    this.myform=new FormGroup({
    'user':new FormControl('',[Validators.required,this.customvalidation.bind(this)]),
    'email':new FormControl('',Validators.required),
    'array':new FormArray([
      new FormControl('')
    ])
  }
)}

onclickaddd(){
  (<FormArray>this.myform.get('array')).push(new FormControl('',Validators.required))
}

// OnAddSkills() {
//   (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl('', Validators.required));
//  }  

onSubmit(){
  console.log(this.myform);
  
}
namee='arpita'
customvalidation(form:FormControl){
  if (this.namee.indexOf(form.value)  !== -1) {
    return{'error':true}
}
return null
}
}