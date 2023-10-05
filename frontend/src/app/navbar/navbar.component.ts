import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {
    // Subscribe to router events to react to navigation changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateLoginStatus();
      }
    });
  }

  ngOnInit() {
    // Initialize the component by checking login status
    this.updateLoginStatus();
  }

  private updateLoginStatus() {
    // Check login status and update isLoggedIn property
    this.isLoggedIn = !!this.authService.getDetails();
    console.log(this.authService.getDetails());
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.removeToken();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
