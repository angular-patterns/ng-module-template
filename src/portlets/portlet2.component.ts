import { Component, OnInit, ViewChild } from '@angular/core';
import { PortletComponentRef } from "../app/model/model";
import { WidgetComponent } from "../app/widget/widget.component";

@Component({
    selector: 'portlet2',
    template: `
        <h1>Portlet 2</h1>
    
        <widget><widget>
    `
})

export class Portlet2Component implements PortletComponentRef, OnInit {
    @ViewChild(WidgetComponent) widget: WidgetComponent;
    constructor() { }

    ngOnInit() { }
}