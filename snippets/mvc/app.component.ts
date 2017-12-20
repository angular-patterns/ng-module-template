import { Component } from '@angular/core';
import { MyService } from './data/my.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private myService: MyService) {

  }
}
