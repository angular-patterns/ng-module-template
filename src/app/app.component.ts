import { Component } from '@angular/core';
import { data } from './data';

export interface Item {
  title:string;
  link: string;
  img: string;
}

@Component({
  selector: 'sa-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  concepts: Item[];
  constructor() {
    this.title = 'Angular Fundamental Concepts';
    this.concepts = data.concepts;
  }
}
