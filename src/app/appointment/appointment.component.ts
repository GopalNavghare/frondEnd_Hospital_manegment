import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service'; // Ensure this is imported

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointments: Appointment[] = []; 

  constructor(private appointmentService: AppointmentService) {} 

  ngOnInit(): void {
    this.getAllAppointments();
  }

  getAllAppointments() {
    this.appointmentService.getAllAppointments().subscribe(data => {   
      this.appointments = data; 
    });
  }
  delete(id:number)
  {
      this.appointmentService.deleteAppointment(id).subscribe(data=>{

        console.log(data);
        this.getAllAppointments();
      })
      
  }
  
}
