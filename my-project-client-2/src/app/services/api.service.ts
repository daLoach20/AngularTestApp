import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://localhost:7065/api';

  constructor(private http: HttpClient) { }

  getWeatherForecast(): Observable<any> {
    return this.http.get(`${this.baseUrl}/weatherforecast`);
  }

}
