import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Employee from '../../types/api/employee';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]> {
    const url = `${this.baseUrl}/Employee`;
    return this.http.get<Employee[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // Client-side error occurred
      console.error('An error occurred:', error.error.message);
    } else {
      // Server-side error occurred
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
