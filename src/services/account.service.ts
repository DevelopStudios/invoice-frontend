import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, delay, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class AccountService {
  private tokenSubject: BehaviorSubject<any | null>;
  public token: Observable<any | null>;
  isUserLoggedIn:boolean = false;

  constructor(private http: HttpClient, private router: Router,) { 
    this.tokenSubject = new BehaviorSubject(localStorage.getItem('access_token')!);
    this.token = this.tokenSubject.asObservable();
  }

  public get tokenValue() {
    return this.tokenSubject.value;
  }

  clearHeaders(){
    localStorage.removeItem('access_token');
  }

  login(obj:any) {
    return this.http.post(environment.apiUrl + '/auth/login/', obj).pipe(map((token:any) => {
      localStorage.setItem('access_token', token.token);
      this.isUserLoggedIn = true;
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
      this.tokenSubject.next(token);
      return of(this.isUserLoggedIn).pipe(
        delay(1000),
        tap(val => {
          console.log('Is user authenticated' + val)
        })
      )
    }));
  }

  logout(): void {
    this.isUserLoggedIn = false;
       localStorage.removeItem('isUserLoggedIn'); 
  }

  getInvoices(){
    return this.http.get(environment.apiUrl+'/api/invoices');
  }

  getInvoice(id:number){
    return this.http.get(environment.apiUrl+'/api/invoices/'+id);
  }

  getStatuses() {
    return this.http.get(environment.apiUrl+'/api/statuses');
  }

  getInvoiceItems() {
    return this.http.get(environment.apiUrl+'/api/items');
  }

  getRandomUser() {
    return this.http.get('https://randomuser.me/api/');
  }
}
