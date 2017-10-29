import { Component } from '@angular/core';
import { UserPortalProvider } from '@portal/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  templates: string[] = ['template1', 'template2','template3', 'template4', 'template5'];
  index: number = 0;
  constructor(private userPortalProvider: UserPortalProvider){
    userPortalProvider.update({
      key: 'template1',
      widgets: [
        { key: 'time', location: 1},
        { key: 'address', location: 4},
        { key: 'inbox', location: 2},
        { key: 'weather', location: 1},
      ]
    });
  }

  onClick() {
    this.index = (this.index +1) % 5;
    this.userPortalProvider.update({
      key: this.templates[this.index],
      widgets: [
        { key: 'time', location: 1},
        { key: 'address', location: 4},
        { key: 'inbox', location: 2},
        { key: 'weather', location: 1},
      ]
    })

  }
}