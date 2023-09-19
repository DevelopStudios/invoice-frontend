import { Component } from '@angular/core';
import { LoggedUser } from 'src/ models/logged-user.model';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user:LoggedUser = {username:'',picture:''};
  constructor(private account: AccountService){
  }

  ngOnInit(){
    this.account.getRandomUser().subscribe((value:any) => {
      console.log(value);
      this.user.picture = value.results[0].picture.large;
      this.user.username = value.results[0].name;
    });
  }
}
