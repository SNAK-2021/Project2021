import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.css']
})
export class ReceptionistComponent implements OnInit {

  constructor(public AuthenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }
  logout(){
    this.AuthenticationService.logout();
  }
}
