
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './html/home.component.html',
  styleUrls: ['./styles/home.component.css']
})
export class HomeComponent {
  title = 'routing-app';
}
