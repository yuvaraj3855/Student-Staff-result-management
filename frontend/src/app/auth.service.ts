import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'jwtToken';
  constructor(private http: HttpClient) {}
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
  getDetails(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  login(username: string, password: string): Observable<any> {
    // Implement your authentication logic here
    // Make an HTTP POST request to your authentication API or backend
    // Return an observable to handle the response
    return this.http.post('http://localhost:3000/api/auth/login', {
      username,
      password,
    });
    // return { username, password };
  }
  register(username: string, password: string, role: string) {
    // Implement your authentication logic here
    // Make an HTTP POST request to your authentication API or backend
    // Return an observable to handle the response
    return this.http.post('http://localhost:3000/api/auth/register', {
      username,
      password,
      role,
    });
    // return { username, password };
  }
  getUserRole(): string | null {
    // Retrieve the user's role from local storage
    return localStorage.getItem('userRole');
  }
}
