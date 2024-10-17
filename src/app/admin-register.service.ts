import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminRegisterService {

  private baseUrl = 'http://localhost:9090/api/admin/register';

  constructor(private http: HttpClient) {}

  registerAdmin(admin: any): Observable<any> 
  {
    return this.http.post(`${this.baseUrl}`, admin);
  }

}
