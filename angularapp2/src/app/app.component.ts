import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { get } from 'http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  data:string="red"
  istrue=true
  constructor(private obj:ServiceService) {}
getapp(){
  this.obj.get()
}

  title = 'Website';
  name=this.title.toUpperCase()
  imgurl='https://images.pexels.com/photos/4491786/pexels-photo-4491786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  video='https://player.vimeo.com/external/490789068.sd.mp4?s=aec2131515a8e4c27d613653f5cf715552485df7&profile_id=165&oauth2_token_id=57447761'
  changeme(e){
    this.imgurl=e.target.value
    console.log(e);

  }
  
  videochange(d)
{
this.video=d.target.value
console.log(d);

}

onchange(){
  this.data='blue'
}
ondestroy(){
  this.istrue=false
}
}
