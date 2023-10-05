// student-auth.guard.ts

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StudentAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Check if the user's role is 'student'
    if (this.authService.getUserRole() === 'student') {
      return true; // Allow access
    }

    // If not 'student', redirect to the login page
    this.router.navigate(['/login']);
    return false; // Prevent access
  }
}
