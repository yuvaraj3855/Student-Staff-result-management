import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router module for navigation
import { AuthService } from '../auth.service';
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
  constructor(private authService: AuthService, private router: Router) {}

  // Implement the login function
  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Handle successful login response here (e.g., navigate to a dashboard)
        console.log('Login successful');
        this.router.navigate(['/student-result']);
      },
      (error) => {
        // Handle login error (e.g., display an error message)
        console.error('Login failed:', error);
      }
    );
    // this.authService.login(this.username, this.password);
    // console.log(this.username);
    // // Implement your authentication logic here
    // // Example: Check if username and password are valid
    // if (this.username === this.username && this.password === this.password) {
    //   // Authentication successful, navigate to the student dashboard
    //   this.router.navigate(['/student-result']);
    // } else {
    //   // Authentication failed, you can display an error message or handle it as needed
    //   console.error('Login failed. Invalid credentials.');
    // }
  }
}
