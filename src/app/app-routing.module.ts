import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonalInfoComponent } from './add-personal-info/add-personal-info.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { AdministrationPageComponent } from './administration-page/administration-page.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';


import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AuthGuard } from './guards/auth.guard';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { ObsandprescpComponent } from './obsandprescp/obsandprescp.component';
import { OpdQueueComponent } from './opd-queue/opd-queue.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PrscriptionsComponent } from './prscriptions/prscriptions.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { WellcomeComponent } from './wellcome/wellcome.component';

const routes: Routes = [
  {
    path:'departments',
    component:DepartmentsListComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'employee',
    component:EmployeeListComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'all-employees',
    component:AllEmployeesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'opd-queue',
    component:OpdQueueComponent,
    canActivate:[AuthGuard]
  },
  {
   path:'adminstration',
   component:AdministrationPageComponent,
   canActivate:[AuthGuard]
  },
  {
   path:'doctor',
   component:DoctorPageComponent,
   canActivate:[AuthGuard]
  },
  {
   path:'history',
   component:HistoryComponent,
   canActivate:[AuthGuard]
  },
  {
   path:'obsandprescp',
   component:ObsandprescpComponent,
   canActivate:[AuthGuard]
  },
  {
  path:'receptionist',
  component:ReceptionistComponent,
  canActivate:[AuthGuard]
  },
  {
    path:'addpatient',
    component:AddpatientComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'add-personal-info',
    component:AddPersonalInfoComponent,
    canActivate:[AuthGuard]
  },
  {
   path:'prscription',
   component:PrscriptionsComponent,
   canActivate:[AuthGuard]
  },
  {
   path:'search-patient',
   component:SearchPatientComponent,
   canActivate:[AuthGuard]
  },
  {
    path:'welcome',
    component:WellcomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'personal-info',
    component:PersonalInfoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'search-employee',
    component:SearchEmployeeComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentsListComponent,
                                EmployeeListComponent,
                                LoginComponent,
                                AllEmployeesComponent,
                                WellcomeComponent,
                                PersonalInfoComponent,
                                SearchEmployeeComponent,
                                DoctorPageComponent,
                                AdministrationPageComponent,
                                HistoryComponent,
                                ObsandprescpComponent,
                                ReceptionistComponent,
                                AddpatientComponent,
                                AddPersonalInfoComponent,
                                PrscriptionsComponent,
                                SearchPatientComponent
                                           ]