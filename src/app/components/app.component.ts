import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterTemplate } from '../templates/footer.template';
import { HeaderTemplate } from '../templates/header.template';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterTemplate, HeaderTemplate],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }