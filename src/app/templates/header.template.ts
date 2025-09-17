
import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { TemplateConfig } from '../config/template.config';

@Component({
  selector: 'app-header',
  imports: [MatListModule],
  templateUrl: './html/header.template.html',
  styleUrls: ['./styles/header.template.css']
})
export class HeaderTemplate {  
  title = TemplateConfig.getTitle();
}
