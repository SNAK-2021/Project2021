import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opd-queue',
  templateUrl: './opd-queue.component.html',
  styleUrls: ['./opd-queue.component.css']
})
export class OpdQueueComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public pID:string='pID';
  public pName:string='pName';
  public pBirth:string='pBirthdate';
  public pGender:string='pGender';
  public pCity:string='pCity';
  public pbloodgroup:string='pBloodGroup';
  public pchronicdisease:string='pChronicDisease';
  public pmedicineallergy:string='pMedicineAllergy';
  
  public Data: any=
  [
    {
      pID:"pID",
      pName:"pName",
      pBirth:"pBirthdate",
      pGender:"pGender",
      pCity:"pCity",
      pbloodgroup:"pBloodGroup",
      pchronicdisease:"pChronicDisease",
      pmedicineallergy:"pMedicineAllergy",
    }
  ]
  public Data1: any=
  [
    {
      pID1:"pID",
      pName1:"pName",
      pBirth1:"pBirthdate",
      pGender1:"pGender",
      pCity1:"pCity",
      pbloodgroup1:"pBloodGroup",
      pchronicdisease1:"pChronicDisease",
      pmedicineallergy1:"pMedicineAllergy",
    }
  ]
}
