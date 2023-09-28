import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    // Implement your authentication logic here
    // Make an HTTP POST request to your authentication API or backend
    // Return an observable to handle the response
    return this.http.post('http://localhost:3000/api/auth/login', {
      username,
      password,
    });
    // return { username, password };
  }
  register(username: string, password: string) {
    // Implement your authentication logic here
    // Make an HTTP POST request to your authentication API or backend
    // Return an observable to handle the response
    return this.http.post('http://localhost:3000/api/auth/register', {
      username,
      password,
    });
    // return { username, password };
  }
}
