import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WaitlistService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  joinWaitlist(data: any): Observable<any> {
    console.log('Sending data to server:', data);
    return this.http.post(`${this.apiUrl}/waitlist`, data);
  }
}
