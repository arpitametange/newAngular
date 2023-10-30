import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  constructor(private postservice:PostService, private router:ActivatedRoute) { }
vari;
  ngOnInit() {
  let  id= this.router.snapshot.params['id']
    this.postservice.getpostbyid(id).subscribe(res=>{
      console.log(res);
      this.vari=res
    })
  }

}
