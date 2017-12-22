import { Component, OnInit, Input, AfterViewInit,ViewChild, ElementRef, TemplateRef, EmbeddedViewRef } from '@angular/core';
import { PortalService } from '../services/portal.service';
import { ViewContainerRef } from '@angular/core';
import { WidgetFactory } from '../services/widget.factory';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from '../services/message.model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/combineLatest';
import { NgTemplateOutlet } from '@angular/common';

export interface Data {
    name: string;

}

@Component({
    selector: 'sa-widget-outlet',
    templateUrl: 'widget-outlet.component.html'
})

export class WidgetOutletComponent implements OnInit, OnDestroy {
    @ViewChild('view', { read: ViewContainerRef }) view: ViewContainerRef;
    @ViewChild('view') template: TemplateRef<any>;
    @Input() location: number;
    subject: Subject<any>;
    ready$: Observable<Message>;
    subscription: Subscription;

    constructor(private portalService: PortalService, private factory:WidgetFactory, private viewRef: ViewContainerRef) { 
        this.subject = new Subject<any>();
        this.ready$ = this.portalService.messages$
            .combineLatest(this.subject.asObservable(), (first:Message,second:any)=> first);
            
        this.subscription = this.ready$.subscribe(t=> {
            if (t.location == this.location) {
                this.factory.create(this.view, t.component);
                this.viewRef.createEmbeddedView(this.template);
            }
        });

    }


    ngOnInit() {
        this.subject.next();
     }

     ngOnDestroy() {
         if (this.subscription)
             this.subscription.unsubscribe();
     }
}