import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) {}

         
  private baseUrl="http://localhost:9090/api/v3/medicines"
  getMedicineList():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`)
  }
  createMedicine(medicine: Medicine): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, medicine);
  }
  deleteMedicine(id:number):Observable<object>
    {
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }
    getMedicineById(id:number):Observable<Medicine>
  {
    return this.httpClient.get<Medicine>(`${this.baseUrl}/${id}`);
  }
  updateMedicine(id:number,medicine:Medicine):Observable<object>
  {
      return this.httpClient.put<Medicine>(`${this.baseUrl}/${id}`,medicine)
  }
}
