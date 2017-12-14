import { Component, Inject } from '@angular/core';
import { ModalService } from 'ng-bootstrap-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  constructor(@Inject(ModalService) private modalService: ModalService) {
    this.title = 'Hello World!';
  }
  open() {
    this.modalService.open('test');
  }
}
