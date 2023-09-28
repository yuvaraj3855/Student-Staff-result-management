import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent {
  // Define properties to store user input (e.g., registration form fields)
  firstName: string = '';
  lastName: string = '';
  registrationNumber: string = '';
  // Add more properties as needed for your registration form

  // Inject the Router into the component's constructor for navigation
  constructor(private router: Router) {}

  // Implement the registration function
  register() {
    // Implement your registration logic here
    // Example: Send registration data to the server via an HTTP request
    const registrationData = {
      firstName: this.firstName,
      lastName: this.lastName,
      registrationNumber: this.registrationNumber,
      // Include additional fields as needed
    };

    // Assuming a successful registration, navigate to a success page
    // You can replace this with your desired navigation logic
    this.router.navigate(['/registration-success']);
  }
}
