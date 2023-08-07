import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/data/services/api/api-service.service';
import Employee from 'src/app/data/types/api/employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  public employees: Employee[] = []
  public loading: boolean = true

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAll().subscribe( (data) => {
      this.employees = data;
      this.loading = false;
    })
  }
}
