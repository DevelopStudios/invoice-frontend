import { Component } from '@angular/core';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private account: AccountService){
    this.account.getAPI();
  }
}
