import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css']
})
export class DoctorPageComponent implements OnInit {
 
 

  constructor(public AuthenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }
  logout(){
    this.AuthenticationService.logout();
  }
}
