import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../modal/services/modal.service';
import { Confirm } from './confirm.model';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
    selector: 'nx-confirm-dialog',
    templateUrl: 'confirm-dialog.component.html'
})

export class ConfirmDialogComponent implements OnInit {
    info:Confirm;
    infoGroup: FormGroup;

    constructor(private modalService:ModalService, private fb: FormBuilder) {
        this.info = this.modalService.getValue();
        this.infoGroup = fb.group({});
     }

    ngOnInit() {
     }

     submit(info:Confirm) {
         this.modalService.ok(info);
     }
     cancel() {
         this.modalService.cancel();
     }

     
}