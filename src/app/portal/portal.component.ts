import { Component, OnInit, Input, ViewContainerRef, ComponentRef, OnChanges, OnDestroy, ViewChild, EventEmitter, Output, trigger, state, style, transition, animate, AfterViewInit } from '@angular/core';
import { WidgetHostDirective } from '../widget-host/widget-host.directive';
import { PortalFactory } from '../providers/portal.factory';
import { MessageService } from '../widget/message.service';


@Component({
    selector: 'portal',
    templateUrl: 'portal.component.html',
    animations: [
        trigger('myAwesomeAnimation', [
            state('small', style({
                opacity: '0.0'
            })),
            state('large', style({
                opacity: '1.0'
            })),

            transition('small <=> large', animate('1000ms ease-in'))
        ])
    ]
})

export class PortalComponent implements AfterViewInit, OnInit, OnChanges, OnDestroy {
    component: ComponentRef<any>;
    @Input() name: string;
    @Output() nameChange: EventEmitter<string>;
    @ViewChild(WidgetHostDirective) widgetHost: WidgetHostDirective;
    state: string = 'small';
    constructor(private factory: PortalFactory, private messageService:MessageService) { 
        this.nameChange = new EventEmitter<string>();
        this.messageService.portalChange$.subscribe(t=> {
            this.name = t;
            this.nameChange.next(t);
            this.onRender();
        });
        this.state = 'small';
    }
    animateMe() {
        this.state = (this.state == 'small'? 'large': 'small');
    }
    ngOnInit() {
        this.onRender();
     }
     ngAfterViewInit(): void {
        setTimeout(t=> this.animateMe(), 0);
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
