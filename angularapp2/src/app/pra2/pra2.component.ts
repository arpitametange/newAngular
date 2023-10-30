import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { error } from 'console';
import { Observable } from 'rxjs/internal/Observable';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { promise } from 'protractor';

@Component({
  selector: 'app-pra2',
  templateUrl: './pra2.component.html',
  styleUrls: ['./pra2.component.css']
})
export class Pra2Component implements OnInit {

  constructor(private service:ServiceService,private fb:FormBuilder) { 
    this.createform()
  }

  ngOnInit() {
    this.service.get().subscribe(res=>{
      console.log(res);
      
    }),((error:any)=>{
      console.log(error);
          
    }),()=>{
      console.log('this is ');
      
    }
    this.myreactiveform.patchValue({
      'user':'arpita',
      'password':'1123'
    })
  }
  practicefun(d){
    console.log(d);

  }


  //  obs=new Observable((observer)=>{
  //   console.log('complette');
  //   observer.next(1)
  //   observer.next(2)
  //   observer.error('this is errow=e')
    
  //   })
  // newFun="this is the new function thank god";
  // neww='this is the input second'
//   funct(){
//     console.log('this is the function block*****');
    
//   }
//   deggo(d){
// console.log(d);

  // }

  myreactiveform:FormGroup

  createform(){
    this.myreactiveform=new FormGroup({
    'user':new FormControl("user",[],[this.createvalidation]),
    'password':new FormControl('please add password',[]),
    'array':new FormArray([
      new FormControl('')
    ])
    })
    // this.myreactiveform=this.fb.group({
    //   'user':this.fb.control('user',[Validators.required,this.createvalidation.bind(this)]),
    //   'password':this.fb.control('')
    // })
  }
  onsubmit(){
     console.log(this.myreactiveform);

  }


createvalidation(form:FormControl): Promise<any>| Observable<any>{
  let promisenew=new Promise((resolve,reject)=>{
if(form.value==='arpita'){
  resolve({'error':true})
}
else{
  resolve (null)
}
})
return promisenew
}

click(){
 (<FormArray>this.myreactiveform.get('array')).push(new FormControl(""))
}



}