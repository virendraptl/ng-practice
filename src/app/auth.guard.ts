import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}


// -------------------------------

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private toaster: ToastrService,
    private toasterService: HotToastService
  ) {}

  canActivate(): boolean {
    if (!!localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/seller/auth/login']);
      // this.toaster.error('User not logged in! Redirectig to login page')
      this.toasterService.error('User not logged in! Redirectig to login page');
      return false;
    }
  }

  // isLoggedIn():boolean {
  //   if(this.http.loginStatus()){
  //     this.router.navigate(['/my-profile']);
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }
}
