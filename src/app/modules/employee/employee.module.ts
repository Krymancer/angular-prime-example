import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: EmployeeListComponent, title: 'Employees'}
]

export const EmployeeRoutes = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutes
  ]
})
export class EmployeeModule { }
