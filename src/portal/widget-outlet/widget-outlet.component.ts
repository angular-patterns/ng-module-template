import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, TemplateRef, EmbeddedViewRef, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { PortalService } from '../services/portal.service';
import { ViewContainerRef } from '@angular/core';
import { WidgetFactory } from '../services/widget.factory';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message, InternalMessage } from '../services/message.model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'sa-widget-outlet',
    templateUrl: 'widget-outlet.component.html'
})

export class WidgetOutletComponent implements OnInit, OnDestroy, OnChanges {

    @Input() location: number;

    messages$: Observable<InternalMessage[]>;


    constructor(private portalService: PortalService, ) {

        this.messages$ = this.portalService.messages$.map(t=> t.filter(x=>x.location == this.location));

    }

    ngOnChanges(changes: SimpleChanges) {

        let change:SimpleChange = changes['location'];
        if (change.currentValue !== change.previousValue) {
            this.messages$ = this.messages$.map(t=>t);
        }
    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }
}