import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component'; // Import the student dashboard component
import { LoginComponent } from './login/login.component';
import { StudentAuthGuard } from './student-auth.guard';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffAuthGuard } from './staff-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'student-dashboard',
    component: StudentDashboardComponent,
    canActivate: [StudentAuthGuard],
  },
  {
    path: 'staff-dashboard',
    component: StaffDashboardComponent,
    canActivate: [StaffAuthGuard],
  },
  {
    path: 'student-register',
    component: StudentRegisterComponent,
    canActivate: [StaffAuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'student-login', component: StudentLoginComponent },
  // { path: 'student-register', component: StudentRegisterComponent },
  { path: 'student-result', component: StudentResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
