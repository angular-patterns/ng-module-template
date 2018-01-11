import { Component } from '@angular/core';
import { PortalService } from '@sa/portal';
import { OnInit } from '@angular/core';

@Component({
  selector: 'sa-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  constructor(private portalService: PortalService) {
    this.title = 'Hello World!';

  }

  go() {
   
    this.portalService.push('1', ['widget', 'widget']);

  }

  ngOnInit() {
  }


}
