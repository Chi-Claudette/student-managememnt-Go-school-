import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {RequestsService} from "./requests.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.requestService.isLoggedIn()){
      alert("Please Login First to access this page!");
      this.router.navigate(["/admin"]);
      return false;
    }
    return true;
  }
  constructor(private requestService: RequestsService, private router: Router)
  {
  }
}


