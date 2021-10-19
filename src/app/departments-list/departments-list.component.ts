import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent  {
  //implements OnInit
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  public JD:string='Joining Date';
  public ID:string='ID';
  public Name:string='Name';
  public Birth:string='Birthdate';
  public Gender:string='Gender';
  public Email:string='Email ID';
  public Mobile:string='Mobile number';
  public Aadhar:string='Aadhar number';
  public Country:string='Country';
  public State:string='State';
  public City:string='City';
  public Address:string='Address';
  public Role:string='Role';
  public Qualification:string='Qualification';
  public Specialization:string='Specialization'
  }