import { Component, AfterViewInit, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { PortalService } from '../portal/services/portal.service';



@Component({
  selector: 'sa-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  location:number;
  constructor(private portalService: PortalService) {
    this.location = 1;
    this.portalService.push([
      { name: 'test', location: 1},
      { name: 'time', location: 2},
      { name: 'time', location: 2},
      { name: 'time', location: 2},
      { name: 'time', location: 2},
      { name: 'address', location: 3},
      { name: 'time', location: 4},    
      { name: 'time', location: 4},    
      { name: 'time', location: 4},    
      { name: 'time', location: 4},    
      { name: 'time', location: 5},   
      { name: 'time', location: 5},   
      { name: 'time', location: 5},   
      { name: 'time', location: 6},       
    ]);

  }
  ngOnInit() {
    
  }

  ngAfterViewInit() {
    
  }
  go() {
 

  }
}
