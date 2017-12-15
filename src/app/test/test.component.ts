import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../modal/services/modal.service';


@Component({
    selector: 'test',
    templateUrl: 'test.component.html'
})

export class TestComponent implements OnInit {
    value:string;
    constructor(private modalService:ModalService,private injector:Injector) {
       
        this.value = this.modalService.getValue(this.injector);
     }

    ngOnInit() {
     }
}