import { Component } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-root',
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
