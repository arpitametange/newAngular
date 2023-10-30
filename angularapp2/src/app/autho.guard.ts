import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthoGuard implements  CanActivate {
  constructor(private route:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
// if(    localStorage.getItem('username')!=null){
// return true
// }
// else{
// this.route.navigate(['/home'])
// }
//   }
  }
}
