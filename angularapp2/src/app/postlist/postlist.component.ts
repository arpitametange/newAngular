import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from './post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  constructor(private service:PostService) { }
array: Post[] = []
  ngOnInit() {
    this.service.getpost().subscribe(res=>{
      console.log(res);
      this.array=res
    })
  }

}
