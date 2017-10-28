import { Component } from '@angular/core';
import { UserPortalProvider } from '@portal/core';

@Component({
  selector: 'feature',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  templates: string[] = ['template1', 'template2','template3', 'template4'];
  index: number = 0;
  constructor(private userPortalProvider: UserPortalProvider){
    userPortalProvider.update({
      key: 'template1',
      widgets: [
        { key: 'time', location: 1},
        { key: 'address', location: 2},
        { key: 'weather', location: 3},
        { key: 'blah', location: 3},
      ]
    });
  }

  onClick() {
    this.index = (this.index +1) % 4;
    this.userPortalProvider.update({
      key: this.templates[this.index],
      widgets: [
        { key: 'time', location: 1},
        { key: 'address', location: 2},
        { key: 'weather', location: 3},
        { key: 'blah', location: 3},
      ]
    })

  }
}