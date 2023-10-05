import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css'],
})
export class StaffDashboardComponent {
  username: string = '';
  data: string | null = null;
  userRole: string | null = null; // You can set this value based on your authentication logic
  constructor(private authService: AuthService, private router: Router) {}
  logout() {
    // Implement your logout logic here, e.g., clearing the token and redirecting to the login page
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    const userDetails = this.authService.getDetails(); // Modify this to get the user details from local storage or another source
    console.log(userDetails);
    if (userDetails) {
      const userDetailsObj = JSON.parse(userDetails);
      this.username = userDetailsObj.user.username; // Update to access the username property in your response
      this.userRole = userDetailsObj.user.role; // Update to access the role property in your response
      console.log(userDetailsObj.user.username);
    }
  }
}
