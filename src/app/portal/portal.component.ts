import { Component, OnInit, Input, ViewContainerRef, ComponentRef, OnChanges, OnDestroy, ViewChild, EventEmitter, Output } from '@angular/core';
import { WidgetHostDirective } from '../widget-host/widget-host.directive';
import { PortalFactory } from '../providers/portal.factory';
import { MessageService } from '../widget/message.service';


@Component({
    selector: 'portal',
    templateUrl: 'portal.component.html'
})

export class PortalComponent implements OnInit, OnChanges, OnDestroy {
    component: ComponentRef<any>;
    @Input() name: string;
    @Output() nameChange: EventEmitter<string>;
    @ViewChild(WidgetHostDirective) widgetHost: WidgetHostDirective;

    constructor(private factory: PortalFactory, private messageService:MessageService) { 
        this.nameChange = new EventEmitter<string>();
        this.messageService.portalChange$.subscribe(t=> {
            this.name = t;
            this.nameChange.next(t);
            this.onRender();
        });
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
