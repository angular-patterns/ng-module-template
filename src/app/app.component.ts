import { Component } from '@angular/core';
import { UserPortalProvider } from '@portal/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  templates: string[] = ['template1', 'template2','template3', 'template4', 'template5', 'template6'];
  index: number = 0;
  constructor(private userPortalProvider: UserPortalProvider){
    userPortalProvider.update({
      key: 'template1',
      widgets: [
        { key: 'time', location: 99},
        { key: 'inbox', location: 99},
        { key: 'address', location: 99},
        { key: 'weather', location: 99},
        { key: 'inquiry-widget', location: 1},
        { key: 'edoc-widget', location: 1},
        { key: 'address-widget', location: 2},
        { key: 'scholarship-widget', location: 2},
        { key: 'app-widget', location: 3},
        { key: 'rfr-widget', location: 4},
        { key: 'inbox-widget', location: 5},
        
      ]
    });
  }

  onClick() {
    this.index = (this.index +1) % 6;
    this.userPortalProvider.update({
      key: this.templates[this.index],
      widgets: [
        { key: 'time', location: 99},
        { key: 'inbox', location: 99},
        { key: 'address', location: 99},
        { key: 'weather', location: 99},
        { key: 'inquiry-widget', location: 1},
        { key: 'edoc-widget', location: 1},
        { key: 'address-widget', location: 2},
        { key: 'scholarship-widget', location: 2},
        { key: 'app-widget', location: 3},
        { key: 'rfr-widget', location: 4},
        { key: 'inbox-widget', location: 5},        
        // { key: 'time', location: 1},
        // { key: 'address', location: 2},
        // { key: 'inbox', location: 2},
        // { key: 'weather', location: 1},
        // { key: 'inquiry-widget', location: 1},
        // { key: 'edoc-widget', location: 2},
        // { key: 'address-widget', location: 3},
        // { key: 'scholarship-widget', location: 4},
        // { key: 'app-widget', location: 1},
        // { key: 'rfr-widget', location: 2},
        // { key: 'inbox-widget', location: 3},
      ]
    })

  }
}