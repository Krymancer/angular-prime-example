import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api-service.service';
import { environment } from '../../../..//environments/environment';
import Employee from '../../types/api/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all employees', () => {
    const mockEmployees: Employee[] = [
      { employeeID:"10000",status:"A",adUserID:"LSkywalker",firstName:"Luke",lastName:"Skywalker",emailAddress:"luke@mail.com"},
      { employeeID:"10001",status:"A",adUserID:"LOrgana",firstName:"Leia ",lastName:"Organa",emailAddress:"luke@mail.com"}
    ];

    service.getAll().subscribe(employees => {
      expect(employees).toEqual(mockEmployees);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/Employee`);
    expect(req.request.method).toBe('GET');
    req.flush(mockEmployees);
  });

  it('should handle error on HTTP request', () => {
    const errorMessage = 'Server error occurred';
    service.getAll().pipe(
      catchError((error: HttpErrorResponse) => {
        expect(error.status).toBe(500);
        expect(error.statusText).toBe(errorMessage);
        return [];
      })
    ).subscribe();

    const req = httpMock.expectOne(`${environment.apiUrl}/Employee`);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('Server error', { message: errorMessage }));
  });
});
