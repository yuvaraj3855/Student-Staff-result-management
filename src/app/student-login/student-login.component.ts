import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router module for navigation

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css'],
})
export class StudentLoginComponent {
  // Define properties to store user input (username and password)
  username: string = '';
  password: string = '';

  // Inject the Router into the component's constructor for navigation
  constructor(private router: Router) {}

  // Implement the login function
  login() {
    // Implement your authentication logic here
    // Example: Check if username and password are valid
    if (this.username === 'admin' && this.password === 'admin') {
      // Authentication successful, navigate to the student dashboard
      this.router.navigate(['/student-result']);
    } else {
      // Authentication failed, you can display an error message or handle it as needed
      console.error('Login failed. Invalid credentials.');
    }
  }
}
