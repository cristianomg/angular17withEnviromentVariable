import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-env';
  constructor() {
    const apiUrl = process.env['APP_API_ENDPOINT'];
    console.log(apiUrl);   
  }

}
