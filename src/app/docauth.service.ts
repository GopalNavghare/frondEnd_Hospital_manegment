import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }
  authenticate(username:string,password:string)
  {
      if(username=="Gopal"&& password=="Gopal@45")
      {
      sessionStorage.setItem('username',username);
        return true;
      }
      else{
        return false;
      }
  }
  isUserLoggedIn()
  {
    console.log("user login ho gaya hain");
   let user= sessionStorage.getItem('username');
   return !(user==null);

  }
  logout()
  {
    console.log("user logout ho gaya hain")
    sessionStorage.removeItem('username');
  }
}
