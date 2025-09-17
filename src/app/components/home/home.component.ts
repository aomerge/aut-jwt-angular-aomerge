
import {ChangeDetectionStrategy, Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { TemplateConfig } from '../../config/template.config';

@Component({
  selector: 'app-home',
  templateUrl: './html/home.component.html',
  imports: [MatCardModule],
  styleUrls: ['./styles/home.component.css'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  title = TemplateConfig.getTitle();
}
