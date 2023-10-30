import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { title } from 'process';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private obj:MyserviceService) { }

  ngOnInit() {
  //all data
  this.obj.getUrl().subscribe(res=>{console.log(res);})
  //get element by id
  this.obj.getbyId(90).subscribe(res =>{console.log(res);


  })
  ///call the updated method
  this.updatemethod()
  this.deletepost()
  this.createpostt()
}

updatemethod(){
  let obh={
    id:new Date().getTime(),
    title:'this is the uptated date'
  }
  this.obj.update(12,obh).subscribe(res=>{
    console.log('valuee==',res);
    
  })
}

createpostt(){
  let object={
    id:new Date().getTime(),
    title:'this is the new create post '
  }

  this.obj.createpost(object).subscribe(res=>{
    console.log('this is the created one',res);
    
  })
}


deletepost(){
  this.obj.deletepost(1).subscribe(res=>{
  console.log('this is the deleted res',res);

  })
}

}
function getobj() {
  throw new Error('Function not implemented.');
}

