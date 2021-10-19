import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public date:string='Date';
  public Doctor:string='Doctor';
  public Data:any=[
    {
    date:"Date",
    Doctor:"Doctor"
    }
  ]

}
