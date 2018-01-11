import { Component } from '@angular/core';
import { PortalService } from './core/portal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private portalService:PortalService) {
    portalService.push('location 1', ['time']);
    portalService.push('location 2', ['signin']);
    portalService.push('location 3', ['data']);
    portalService.push('location 4', ['panel']);
  }
}
