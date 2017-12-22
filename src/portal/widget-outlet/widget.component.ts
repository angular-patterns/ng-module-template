import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { WidgetFactory } from '../services/widget.factory';
import { InternalMessage } from '../services/message.model';

@Component({
    selector: 'widget',
    templateUrl: 'widget.component.html'
})

export class WidgetComponent implements OnInit {
    @ViewChild('view', { read: ViewContainerRef }) view: ViewContainerRef;
    @ViewChild('view') template: TemplateRef<any>;
    @Input() message: InternalMessage;
    
    constructor(private factory: WidgetFactory, private viewRef: ViewContainerRef) { }

    ngOnInit() { 
        if (this.message != null) {
            this.factory.create(this.view, this.message.component);
            this.viewRef.createEmbeddedView(this.template);
        }
    }
}