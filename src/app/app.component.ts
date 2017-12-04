import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  constructor() {
    this.title = 'Hello World!';
  }

  throwError() {
    throw new Error("Something went wrong!");
  }
}
