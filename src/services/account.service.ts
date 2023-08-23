import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { 
    
  }


  getAPI(){
    this.http.get('http://127.0.0.1:8000/invoices').subscribe(value => console.log(value));
  }
}
