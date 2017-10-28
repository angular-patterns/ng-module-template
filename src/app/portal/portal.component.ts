import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { PortalFactory } from '../providers/portal/portal.factory';


@Component({
    selector: 'portal',
    templateUrl: 'portal.component.html'
})

export class PortalComponent implements OnInit {
    @Input() key: string;

    constructor(private view:ViewContainerRef, private factory: PortalFactory) { 

    }

    ngOnInit() {
        this.factory.create(this.view, this.key);
     }
}