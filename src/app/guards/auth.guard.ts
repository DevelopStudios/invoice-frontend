import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from 'src/services/account.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
    constructor(
        private account: AccountService, private router: Router
    ) {
    }
      
    

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
           let url: string = state.url;
     
               return this.checkLogin(url);
           }
     
           checkLogin(url: string): true | any {

              let val: any = localStorage.getItem('isUserLoggedIn');
     
              if(val != null && val == "true"){
                 if(url == "/login")
                    this.router.navigate(['']);
                  else if(url == '/') {
                     this.router.navigate(['/list']);
                  }
                 else 
                    return true;
              } else {
                 return this.router.parseUrl('/login');
              }
           }
}