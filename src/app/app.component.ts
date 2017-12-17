import { Component } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'sa-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  concepts: any[];
  constructor() {
    this.title = 'Angular Fundamental Concepts';
    this.concepts = data.concepts;
  }
}
