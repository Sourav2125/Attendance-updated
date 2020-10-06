import { Injectable } from '@angular/core';
import {  AuthGuardService as AuthGuard } from '../authGuard/auth-guard.service';
import { CanActivate,Router, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { ApiService } from "../apiservice/api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private apiservice : ApiService, private route : Router) { }


 
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    if(this.apiservice.isAuthenticated()){
       return true;
     }
     this.route.navigate(['login']);
     return false;
   }

}

