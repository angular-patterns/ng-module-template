import { Component, OnInit, Input, ViewContainerRef, ComponentRef, OnChanges } from '@angular/core';
import { WidgetFactory } from '../providers/widget/widget.factory';



@Component({
    selector: 'widget',
    templateUrl: 'widget.component.html'
})

export class WidgetComponent implements OnInit, OnChanges {
    component: ComponentRef<any>;
    @Input() key: string;

    constructor(private view:ViewContainerRef, private factory: WidgetFactory) { 

    }

    ngOnInit() {
        this.onRender();
     }

     
     ngOnChanges() {
         this.onRender();
     }

     onRender() {
        if (this.component != null) {
            this.component.destroy();
        }
        this.view.clear();
        this.component = this.factory.create(this.view, this.key);
     }
}
