import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  version: string = require('../../package.json').version;
  constructor() {
    this.title = 'AE Angular Style Guide';
  }
}
