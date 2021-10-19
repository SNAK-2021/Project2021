import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
@Component({
  selector: 'app-administration-page',
  templateUrl: './administration-page.component.html',
  styleUrls: ['./administration-page.component.css']
})
export class AdministrationPageComponent implements OnInit {

  constructor(public AuthenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  logout(){
    this.AuthenticationService.logout();
  }
}
