import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AccountService } from 'src/services/account.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private account: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
     
      if([401,403].includes(err.status)){
  
      }
      const error = err.error.message || err.statusText;
      return throwError(()=> error);
    }));
  }
}
