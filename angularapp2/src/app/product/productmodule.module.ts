import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:ProductComponent,children:[
    {path:'tv',component:TvComponent},
    {path:'laptop',component:LaptopComponent}
  ]}
 
]

@NgModule({
  declarations: [LaptopComponent,
    TvComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]

})
export class ProductmoduleModule { 
constructor(){
  console.log('this is the pruduct module');

}  
}
