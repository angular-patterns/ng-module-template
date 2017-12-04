import { Component, Inject } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html'
})
export class ModalDialogComponent {
  constructor(private modalService:ModalService) {
    
  }
  close() {
    this.modalService.close();
  }
}