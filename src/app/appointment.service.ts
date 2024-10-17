import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) {}
  private baseUrl = "http://localhost:9090/api/v2/appointments"

    getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
    }

    createAppointment(appointment: Appointment): Observable<Object> {
      return this.httpClient.post(`${this.baseUrl}`, appointment);
    }
    deleteAppointment(id:number):Observable<object>
    {

      return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }

}
