import { Component } from '@angular/core';
import { Platform } from './platform.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  constructor() {
    this.title = 'Hello World!';
    const router = Platform.injector.get(Router);
    alert(router);
  }
}
