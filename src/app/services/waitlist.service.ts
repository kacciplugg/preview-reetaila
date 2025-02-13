import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WaitlistService {
  private apiUrl =
    'https://prereetaila-x70yjm7hf-kaccipluggs-projects.vercel.app/api';

  constructor(private http: HttpClient) {}

  joinWaitlist(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/waitlist`, data);
  }
}
