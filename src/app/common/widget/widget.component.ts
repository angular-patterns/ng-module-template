import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, Input, Type } from '@angular/core';
import { WidgetFactory } from '../../core/index';

@Component({
    selector: 'widget',
    templateUrl: 'widget.component.html'
})

export class WidgetComponent implements OnInit {
    @ViewChild('view', { read: ViewContainerRef }) view: ViewContainerRef;
    @ViewChild('view') template: TemplateRef<any>;
    @Input() type: Type<any>;
    
    constructor(private factory: WidgetFactory, private viewRef: ViewContainerRef) { }

    ngOnInit() { 
        if (this.type != null) {
            this.factory.create(this.view, this.type);
            this.viewRef.createEmbeddedView(this.template);
        }
    }
}