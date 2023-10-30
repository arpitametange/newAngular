import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService,private router:Router) { }
username
password
  ngOnInit() {
  }
  login(username,password){
    this.username=username
    this.password=password
     let output=this.service.getinfor(username,password)
     console.log(output);
     let data={
      id:'',
      username:this.username,
      password:this.password
    
    }
      this.service.savedata(data).subscribe(res=>{
        console.log('this is the data login save',res);
      
      })
      this.router.navigate(['/home'])

    //  if (output) {
    //  }
    //  else{
    //   alert("plsease enter valid password and userid")
    //  }


  }





  
}
