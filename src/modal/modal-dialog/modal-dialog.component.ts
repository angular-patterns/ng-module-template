import { Component, Inject } from '@angular/core';

import { ModalService } from '../services/modal.service';
import { baseAnimation } from '../modal.anim';

@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html',
  animations:[
    baseAnimation
  ]
})
export class ModalDialogComponent {
  constructor(private modalService:ModalService) {
    
  }
  close() {
    this.modalService.close();
  }
}