import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  standalone: true
})
export class AppComponent {
  title = 'activite5';
  email : string="hajar@gmail.com";
}
