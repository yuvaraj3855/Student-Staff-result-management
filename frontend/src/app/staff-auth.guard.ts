// staff-auth.guard.ts

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
export class StaffAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Check if the user's role is 'staff'
    if (this.authService.getUserRole() === 'staff') {
      return true; // Allow access
    }

    // If not 'staff', redirect to the login page
    this.router.navigate(['/login']);
    return false; // Prevent access
  }
}
