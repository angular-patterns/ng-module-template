import { Component, OnInit } from '@angular/core';
import { PortalService } from '../../core/index';

@Component({
    selector: 'demo2',
    templateUrl: 'demo2.component.html'

})

export class Demo2Component implements OnInit {
    constructor(private portalService:PortalService) {
    }

    ngOnInit() {

     }

     onPushTime() {
        this.portalService.push('location 2.1', ['time']);
     }
     onPushSignin() {
        this.portalService.push('location 2.2', ['signin']);
     }
     onPushData() {
        this.portalService.push('location 2.3', ['data']);

     }
     onPushPanel() {
        this.portalService.push('location 2.4', ['panel']);

     }
}