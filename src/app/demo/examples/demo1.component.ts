import { Component, OnInit } from '@angular/core';
import { PortalService } from '../../core/index';

@Component({
    selector: 'demo1',
    templateUrl: 'demo1.component.html'
})

export class Demo1Component implements OnInit {
    constructor(private portalService:PortalService) {
        portalService.push('location 1.1', ['time']);
        portalService.push('location 1.2', ['signin']);
        portalService.push('location 1.3', ['data']);
        portalService.push('location 1.4', ['panel']);
      }

    ngOnInit() { }
}