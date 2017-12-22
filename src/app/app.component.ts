import { Component, AfterViewInit } from '@angular/core';
import { OnInit } from '@angular/core';
import { PortalService } from '../portal/services/portal.service';


@Component({
  selector: 'sa-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private portalService: PortalService) {
    this.portalService.push('test', 1);
    
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }
  go() {
    this.portalService.push('test', 1);
  }
}
