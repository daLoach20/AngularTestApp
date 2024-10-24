import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  yo = 'yooooo';
  yo2 = '';
  title = 'my-project-client-2';
  weatherData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit()
  {
    this.apiService.getWeatherForecast().subscribe({
      next: (data: any) => {
        this.weatherData = data;
        console.log('Data received:', data);
      },
      error: (error: any) => {
        this.yo2 = 'Error fetching data.';
        console.log('Error:' ,error);
      }
    });
  }

}
