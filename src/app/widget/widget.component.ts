import { Component, OnInit, Input, ViewContainerRef, ComponentRef, OnChanges, OnDestroy, ViewChild } from '@angular/core';
import { WidgetFactory } from '../providers/widget/widget.factory';
import { WidgetHostDirective } from '../widget-host/widget-host.directive';



@Component({
    selector: 'widget',
    templateUrl: 'widget.component.html'
})

export class WidgetComponent implements OnInit, OnChanges, OnDestroy {
    component: ComponentRef<any>;
    @Input() key: string;
    @ViewChild(WidgetHostDirective) widgetHost: WidgetHostDirective;

    constructor(private factory: WidgetFactory) { 

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
