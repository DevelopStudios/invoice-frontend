import { Component } from '@angular/core';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invoice-frontend';
  constructor(private account: AccountService){
    this.account.getAPI();
  }
}
