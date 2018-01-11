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
     onClear(location: string) {
        this.portalService.push(location, []); 
     }
     onClearAll() {
         this.onClear('location 2.1');
         this.onClear('location 2.2');
         this.onClear('location 2.3');
         this.onClear('location 2.4');
     }
}