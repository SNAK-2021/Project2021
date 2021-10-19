import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService} from '../authentication/authentication.service';
import { SignInData } from '../model/signInData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isformInvalid=false;
  areCredentialInvalid=false;

  constructor(private AuthenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm:NgForm){    
    if(!signInForm.valid){
      //console.log(signInForm.value);
      this.isformInvalid=false;
      this.areCredentialInvalid=false;
      
      return;
    }
    this.checkCredentials(signInForm);
    
  }
  private checkCredentials(signInForm:NgForm){
   
    const signInData=new SignInData(signInForm.value.email,signInForm.value.password,signInForm.value.designation);
    if(!this.AuthenticationService.authenticate(signInData)){
      
      this.isformInvalid=false;
      this.areCredentialInvalid=true;
    }
  
  }
}
