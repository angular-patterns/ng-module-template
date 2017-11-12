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
    this.portal = "portal-template";
    this.messageService.pushWidgets([
      { location: 1, widget:"sample-widget"}
    ]);

  }

  changePortal() {
    this.portal = this.portal == "portal1" ? "portal2": "portal1";
    this.messageService.changePortal(this.portal);
  }
}