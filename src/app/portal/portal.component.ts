import { Component, OnInit, Input, ViewContainerRef, ComponentRef, OnChanges, ViewChild, OnDestroy } from '@angular/core';
import { PortalFactory } from '../providers/portal/portal.factory';
import { WidgetHostDirective } from '../widget-host/widget-host.directive';


@Component({
    selector: 'portal',
    templateUrl: 'portal.component.html'
})

export class PortalComponent implements OnInit, OnChanges, OnDestroy {
    component: ComponentRef<any>;
    @Input() key: string;
    @ViewChild(WidgetHostDirective) widgetHost: WidgetHostDirective;

    constructor(private factory: PortalFactory) { 
        this.component = null;
    }


    ngOnInit() {
        this.onRender();

     }

     
     ngOnChanges() {
         this.onRender();
    
     }

     ngOnDestroy() {
        if (this.component) {
            this.component.destroy();
            this.widgetHost.view.clear();
        }
    }

     onRender() {
        if (this.component != null) {
            this.component.destroy();
            this.widgetHost.view.clear();
        }
        this.component = this.factory.create(this.widgetHost.view, this.key);
     }
}