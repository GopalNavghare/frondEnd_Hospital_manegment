import { Component } from '@angular/core';
import { AdminRegisterService } from '../admin-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {

  admin = {
    username: '',
    mobile: '',
    password: ''
  };

  constructor(private adminRegisterService: AdminRegisterService,private router:Router) {}

  registerAdmin() {
    this.adminRegisterService.registerAdmin(this.admin).subscribe(
      response => {
        alert('Registration successful! You can now login.');
        this.router.navigate(['/adminlogin']);
      },
      error => {
        alert('Registration failed. Please try again.');
      }
    );
  }
}
