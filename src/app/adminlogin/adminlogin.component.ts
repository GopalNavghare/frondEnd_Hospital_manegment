import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username2:string ='gopal';
  password2:string ='45';
  InValidLogin = false;

  constructor(private router: Router,private adminAuthService:AdminauthService) {}

  checkLogin() {
    if (this.adminAuthService.authenticate(this.username2, this.password2)) {
      
      this.router.navigate(['admindash']);
       this.InValidLogin=false;
    } 
    else {
      this.InValidLogin=true;
      alert('Incorrect credentials');
      this.router.navigate(['home']);
     
    }
  }
}
