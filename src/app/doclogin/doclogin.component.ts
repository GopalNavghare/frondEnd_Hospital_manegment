import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
})
export class DocloginComponent {
  username: string = 'Gopal';
  password: string = 'Gopal@45';
  InValidLogin = false;

  constructor(private router: Router,private docauth:DocauthService) {}

  checkLogin() {
    if (this.docauth.authenticate(this.username, this.password)) {
      
      this.router.navigate(['doctordash']);
      return this.InValidLogin=false;
    } 
    else {
      this.InValidLogin=true;
      alert('Incorrect credentials');
      this.router.navigate(['home']);
      return false;
    }
  }
}
