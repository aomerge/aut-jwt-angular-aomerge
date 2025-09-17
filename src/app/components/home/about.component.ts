
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,  
  template: `
    <h1>¡Bienvenido a {{title}}!</h1>
    <p>Este es un proyecto Angular 19 básico.</p>    
  `,
  styles: [`
    h1 {
      color: #369;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 2.5em;
    }
    p {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.2em;
    }
  `]
})
export class AboutComponent {
  title = 'aut-jwt-angular';
}