import { Component } from '@angular/core';
import { apps } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public gridData: any[] = apps;

}
