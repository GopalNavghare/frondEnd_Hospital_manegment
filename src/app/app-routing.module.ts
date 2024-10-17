import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DoctordashComponent } from './doctordash/doctordash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminauthguardService } from './adminauthguard.service';
import { DoctorauthguardService } from './doctorauthguard.service';
import { AdminRegisterComponent } from './admin-register/admin-register.component';

const routes: Routes = [
  {path:'admindash',component:AdmindashComponent, canActivate: [AdminauthguardService]},
  {path:'appointmentlist',component:AppointmentComponent, canActivate: [AdminauthguardService]},
  {path:'create-appointment',component:CreateAppointmentComponent, canActivate: [AdminauthguardService]},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'doctordash',component:DoctordashComponent,canActivate:[DoctorauthguardService]},
  {path:'create-patient',component:CreatePatientComponent,canActivate:[DoctorauthguardService]},
  {path:'medicine',component:MedicineComponent,canActivate:[DoctorauthguardService]},
  {path:'create-medicine',component:CreateMedicineComponent,canActivate:[DoctorauthguardService]},
  {path:'update-patient/:id',component:UpdatePatientComponent,canActivate:[DoctorauthguardService]},
  {path:'view-patient/:id',component:ViewPatientComponent,canActivate:[DoctorauthguardService]},
  {path:'update-medicine/:id',component:UpdateMedicineComponent,canActivate:[DoctorauthguardService]},
  {path:'doclogin',component:DocloginComponent},
  {path:'adminlogin',component:AdminloginComponent},

  {path:'admin-register',component:AdminRegisterComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
