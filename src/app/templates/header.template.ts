import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TemplateConfig } from '../config/template.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatMenuModule, MatButtonModule, MatToolbarModule],
  templateUrl: './html/header.template.html',
  styleUrls: ['./styles/header.template.css']
})
export class HeaderTemplate {
  title = TemplateConfig.getTitle();
}

