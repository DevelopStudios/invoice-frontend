import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username : string ="";
  password : string ="";
  show: boolean= false;
  obj = {"username": "admin", "password": "admin"}
  constructor(private account: AccountService, private router: Router){
  
  }
  submit() {
    this.obj.username = this.username;
    this.obj.password = this.password;
    this.account.login(this.obj).subscribe(data => {
      this.router.navigate(['/list']);
    });
  }

}
