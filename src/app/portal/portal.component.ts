import { Component, OnInit, Input, ViewContainerRef, ComponentRef, OnChanges } from '@angular/core';
import { PortalFactory } from '../providers/portal/portal.factory';


@Component({
    selector: 'portal',
    templateUrl: 'portal.component.html'
})

export class PortalComponent implements OnInit, OnChanges {
    component: ComponentRef<any>;
    @Input() key: string;

    constructor(private view:ViewContainerRef, private factory: PortalFactory) { 
        this.component = null;
    }


    ngOnInit() {
        this.onRender();
     }

     
     ngOnChanges() {
         this.onRender();
     }

     onRender() {
        if (this.component != null) {
            this.component.destroy();
        }
        this.view.clear();
        this.component = this.factory.create(this.view, this.key);
     }
}