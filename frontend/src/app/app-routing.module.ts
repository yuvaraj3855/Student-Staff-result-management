import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component'; // Import the student dashboard component

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'student-register', component: StudentRegisterComponent },
  { path: 'student-result', component: StudentResultComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
