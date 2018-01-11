import { Component } from '@angular/core';
import { PortalService } from './core/portal.service';

@Component({
  selector: 'sa-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  blue: string;
  constructor(private portalService:PortalService) {
    this.title = 'Hello World!';
    this.blue = '';
  }
  go(value: string) {
    this.portalService.push(value, ['test']);
  }
  go2() {
    this.blue = 'hey';
  }
}
