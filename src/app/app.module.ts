import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
// import { LoginComponent } from './login/login.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { DepartmentsListComponent } from './departments-list/departments-list.component';
// import { AllEmployeesComponent } from './all-employees/all-employees.component';
// import { WellcomeComponent } from './wellcome/wellcome.component';
// import { PersonalInfoComponent } from './personal-info/personal-info.component';
// import { SearchEmployeeComponent } from './search-employee/search-employee.component';
// import { OpdQueueComponent } from './opd-queue/opd-queue.component';
// import { DoctorPageComponent } from './doctor-page/doctor-page.component';
// import { AdministrationPageComponent } from './administration-page/administration-page.component';
// import { HistoryComponent } from './history/history.component';
// import { ObsandprescpComponent } from './obsandprescp/obsandprescp.component';
// import { AddpatientComponent } from './addpatient/addpatient.component';
// import { ReceptionistComponent } from './receptionist/receptionist.component';
// import { AddPersonalInfoComponent } from './add-personal-info/add-personal-info.component';
// import { PrscriptionsComponent } from './prscriptions/prscriptions.component';

// import { DepartmentListComponent } from './department-list/department-list.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchPatientComponent,
    // OpdQueueComponent,
    // DoctorPageComponent,
    // AdministrationPageComponent,
    // HistoryComponent,
    // ObsandprescpComponent,
    // AddpatientComponent,
    // ReceptionistComponent,
    // AddPersonalInfoComponent,
    // PrscriptionsComponent,
    
    //LoginComponent,
    // EmployeeListComponent,
    // DepartmentsListComponent,
    // AllEmployeesComponent,
    // WellcomeComponent,
    // PersonalInfoComponent,
    // SearchEmployeeComponent
    
    // DepartmentListComponent,
    // EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
