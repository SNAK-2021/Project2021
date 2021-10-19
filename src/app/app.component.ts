import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newpro-app';

  constructor(public AuthenticationService:AuthenticationService){

  }

  logout(){
    this.AuthenticationService.logout();
  }
}
