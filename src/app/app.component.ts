import { Component } from '@angular/core';
import { MessageService } from './widget/message.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  portal: string;
  constructor(private messageService:MessageService) {
    this.portal = "portal1";
    this.messageService.pushWidgets([
      { location: 1, widget:"widget1", portlet: "portlet1"},
      { location: 2, widget:"widget2", portlet: "portlet1"},
    ]);

  }

  changePortal() {
    this.portal = this.portal == "portal1" ? "portal2": "portal1";
    this.messageService.changePortal(this.portal);
  }
}