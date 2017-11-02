import { Component, OnInit, Input, ComponentRef, ViewChild } from '@angular/core';
import { WidgetHostDirective } from "../widget-host/widget-host.directive";
import { PortletFactory } from "../providers/portlet.factory";
import { PortletComponentRef } from "../model/model";

@Component({
    selector: 'portlet',
    templateUrl: 'portlet.component.html'
})

export class PortletComponent implements OnInit {
    component: ComponentRef<any>;
    @Input() name: string;
    @Input() widget: string;

    @ViewChild(WidgetHostDirective) widgetHost: WidgetHostDirective;

    constructor(private factory: PortletFactory) { 

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
        this.component = this.factory.create(this.widgetHost.view, this.name);
        
        
     }
}