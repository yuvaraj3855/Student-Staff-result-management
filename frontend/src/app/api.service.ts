import { Injectable } from '@angular/core';
import { AppConfig } from './app.config'; // Import the AppConfig object

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  getApiUrl(): string {
    return AppConfig.apiUrl; // Access the API base URL from AppConfig
  }

  // Other methods using configuration...
}
