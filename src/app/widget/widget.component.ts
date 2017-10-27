import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { WidgetFactory } from './widget.factory';

@Component({
    selector: 'widget',
    templateUrl: 'widget.component.html'
})

export class WidgetComponent implements OnInit {
    @Input() key: string;

    constructor(private view:ViewContainerRef, private factory: WidgetFactory) { 

    }

    ngOnInit() {
        this.factory.create(this.view, this.key);
     }
}