import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import {  Router } from '@angular/router';
import { DocauthService } from '../docauth.service';
@Component({
  selector: 'app-doctordash',
  templateUrl: './doctordash.component.html',
  styleUrls: ['./doctordash.component.css']
})
export class DoctordashComponent {
  

  patients:Patient[]=[];
  constructor(private patientService: PatientService,private router:Router,private docauthService:DocauthService) {} 

  ngOnInit(){
    this.getPatients();
  }
  getPatients() {
    this.patientService.getPatientList().subscribe(data => {  
      this.patients = data;  
    })

  }
  update(id:number)
  {
    this.router.navigate(['update-patient',id])
  }

  delete(id:number){
    this.patientService.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })
  }
  viewPatient(id:number)
  {
    this.router.navigate(['view-patient',id])
  }
  logout(){
    this.docauthService.logout();
    this.router.navigate(['home']);
}

}