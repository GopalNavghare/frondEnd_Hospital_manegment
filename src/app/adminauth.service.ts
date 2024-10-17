import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }
  
  authenticate(username2:string,password2:string)
  {
      if(username2=="gopal"&& password2=="45")
      {
       sessionStorage.setItem('username2',username2);
        return true;
      }
      else
      {
        return false;
      }
  }
  isUserLoggedIn()
  {
    console.log("user login ho gaya hain");
   let user= sessionStorage.getItem('username2');
   return !(user==null);

  }
  logout()
  {
    console.log("user logout ho gaya")
    sessionStorage.removeItem('username2');
  }
}
