
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { TemplateConfig } from '../config/template.config';

@Component({
  selector: 'app-footer',
  imports: [MatButtonModule],
  templateUrl: './html/footer.template.html',
  styleUrls: ['./styles/footer.template.css']
})
export class FooterTemplate {
  title = TemplateConfig.getTitle();
}
