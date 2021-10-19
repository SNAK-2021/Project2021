import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from '../model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   public designation:string;
  private readonly mockedUser=new SignInData("naresh@gmail.com","naaru123","");

  isAuthenticated=false;
  constructor(private router:Router) { }

  authenticate(SignInData:SignInData):any{
   // alert(SignInData.designation);
    if((this.checkCredentials(SignInData))){
     if(this.checkdesignation(SignInData)==="Administrator"){       
      this.router.navigate(['adminstration']);     
      }
      if(this.checkdesignation(SignInData)==="Doctor"){
        this.router.navigate(['doctor']);
      }
      if(this.checkdesignation(SignInData)==="Receptionist"){
        this.router.navigate(['receptionist']);
      }
      this.isAuthenticated=true;
      return true;
    }
    this.isAuthenticated=false;
    return false;
  }
  checkdesignation(signInData:SignInData):any{
   
    if(signInData.getDesignation()==="Doctor"){
    this.designation="Doctor";
    return "Doctor";
    }
    if(signInData.getDesignation()==="Administrator"){
    this.designation="Administrator";
    return "Administrator";
    }
    if(signInData.getDesignation()==="Receptionist"){
      this.designation="Receptionist";
    return "Receptionist";
    }
  }
  private checkCredentials(SignInData:SignInData):boolean{

   return this.checkEmail(SignInData.getEmail())&& this.checkPassword(SignInData.getPassword());

  }
  private checkEmail(email:string):boolean{
     return email===this.mockedUser.getEmail();
  }
  private checkPassword(password:string):boolean{
     return password===this.mockedUser.getPassword();
  }
 
   logout(){
    this.isAuthenticated=false;
    this.router.navigate(['']);
  }
}
