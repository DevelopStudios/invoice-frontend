import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from 'src/services/account.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpAppInterceptor implements HttpInterceptor {

  constructor(private account: AccountService,private router: Router,) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add header with basic auth credentials if user is logged in and request is to the api url
    const token = this.account.tokenValue;

    if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: "Token " + token
          }
        });
        
    }
    return next.handle(request);
  }
}
