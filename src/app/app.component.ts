import { Component } from '@angular/core';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invoice-frontend';
  isUserLoggedIn = false;

  constructor(private account: AccountService){
  }

  ngOnInit() {
    let storeData = localStorage.getItem("isUserLoggedIn");
      if( storeData != null && storeData == "true")
         this.isUserLoggedIn = true;
      else
         this.isUserLoggedIn = false;
   }
   
  }
