import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = '';
  usernameInvalid: boolean = false;
  passwordInvalid: boolean = false;
  roleInvalid: boolean = false;
  loginError: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Reset error flags and messages
    this.usernameInvalid = false;
    this.passwordInvalid = false;
    this.roleInvalid = false;
    this.loginError = null;

    if (!this.username) {
      this.usernameInvalid = true;
      return;
    }

    if (!this.password) {
      this.passwordInvalid = true;
      return;
    }

    // Send login request to the server
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        const token = response.token;
        console.log(response);
        this.authService.setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('userRole', response.user.role);
        localStorage.setItem('userDetails', JSON.stringify(response.user));
        // Check the response for user's role
        if (response.user && response.user.role) {
          this.role = response.user.role; // Store the role
          // Redirect to appropriate dashboard based on role
          if (this.role === 'student') {
            this.router.navigate(['/student-dashboard']);
          } else if (this.role === 'staff') {
            this.router.navigate(['/staff-dashboard']);
          } else {
            this.roleInvalid = true;
          }
        } else {
          this.roleInvalid = true;
        }
      },
      (error) => {
        console.error('Login failed:', error);
        this.loginError = 'Login failed. Please try again later.';
      }
    );
  }
}
