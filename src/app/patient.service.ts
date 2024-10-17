import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) {}

  private baseUrl="http://localhost:9090/api/v1/patient"
  getPatientList():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`)
  }
  
  delete(id:number):Observable<object>
  {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  createPatient(patient: Patient): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, patient);
  }
  getPatientById(id:number):Observable<Patient>
  {
    return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
  }
  updatePatient(id:number,patient:Patient):Observable<object>
  {
      return this.httpClient.put<Patient>(`${this.baseUrl}/${id}`,patient)
  }
  
}