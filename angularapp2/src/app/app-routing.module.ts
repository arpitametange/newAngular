import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfounComponent } from './pagenotfoun/pagenotfoun.component';
import { HomeComponent } from './home/home.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { AuthoGuard } from './autho.guard';
import { AddcardbucketComponent } from './home/addcardbucket/addcardbucket.component';


const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home',children:[
    { path: '', component:HomeComponent},

    { path: 'card', component: AddcardbucketComponent}

  ]},

  {path: 'product',canActivate:[AuthoGuard], loadChildren: './product/productmodule.module#ProductmoduleModule'},
  { path: 'post', component: PostlistComponent},

  {path:'postdetails/:id',component:PostdetailsComponent},
  {path:'**',component:PagenotfounComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
