import { Component, OnInit } from '@angular/core';
import { PortalService } from '../../core/index';

@Component({
    selector: 'demo3',
    templateUrl: 'demo3.component.html'

})

export class Demo3Component implements OnInit {
    constructor(private portalService:PortalService) {
    }

    ngOnInit() {

     }

     onPushAll() {
        this.portalService.push('location 3.1', ['time', 'signin', 'data', 'panel']);
     }
     onClearAll() {
        this.portalService.push('location 3.1', []);
     }
}