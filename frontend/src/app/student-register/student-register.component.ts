import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent {
  username: string = '';
  password: string = '';
  usernameInvalid: boolean = false;
  passwordInvalid: boolean = false;
  registrationError: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    // Reset error flags and messages
    this.usernameInvalid = false;
    this.passwordInvalid = false;
    this.registrationError = null;

    if (!this.username) {
      this.usernameInvalid = true;
      return; // Stop registration if username is missing
    }

    if (!this.password) {
      this.passwordInvalid = true;
      return; // Stop registration if password is missing
    }

    this.authService.register(this.username, this.password).subscribe(
      (response) => {
        // Handle successful registration response here
        console.log('Registration successful');
        this.router.navigate(['/student-result']);
      },
      (error) => {
        // Handle registration error and display error message
        console.error('Registration failed:', error);
        if (error.status === 409) {
          // Username already exists
          this.registrationError =
            'Username already exists. Please choose a different username.';
        } else {
          // Other server errors
          this.registrationError =
            'Registration failed. Please try again later.';
        }
      }
    );
  }
}
