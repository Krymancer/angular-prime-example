import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Employee from '../../types/api/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://localhost:7007';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/Employee`);
  }
}
