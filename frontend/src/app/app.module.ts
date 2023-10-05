import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AppConfig } from './app.config';
import { ApiService } from './api.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { StudentLoginComponent } from './student-login/student-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth.interceptor';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    StudentRegisterComponent,
    StudentResultComponent,
    StudentDashboardComponent,
    NavbarComponent,
    LoginComponent,
    StaffDashboardComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  providers: [
    { provide: ApiService, useValue: AppConfig },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
