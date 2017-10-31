import { Component, OnInit } from '@angular/core';
import { UserPortalProvider } from './providers/user-portal/user-portal.provider';



@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userPortalProvider:UserPortalProvider){
    
  }

  ngOnInit() {
    this.userPortalProvider.update({
      key: 'default',
      widgets: [
        { key: 'time', location:1 },
        { key: 'weather', location: 2}
      ]
    });
  


  }
  onclick(portal:string) {
    this.userPortalProvider.update({
      key: portal,
      widgets: [
        { key: 'time', location:1 },
        { key: 'weather', location: 2}
      ]
    });
  }
}