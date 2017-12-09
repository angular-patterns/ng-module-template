import { Component } from '@angular/core';
import { ModalService } from 'modal';

@Component({
  selector: 'sa-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  constructor(private modalService:ModalService) {
    this.title = 'Hello World!';
  }
  go() {
    this.modalService.open('test');
  }
}
