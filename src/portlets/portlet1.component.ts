import { Component, OnInit, ViewChild } from '@angular/core';
import { WidgetComponent } from "../app/widget/widget.component";
import { PortletComponentRef } from "../app/model/model";

@Component({
    selector: 'portlet1',
    template: `
        <h1>Portlet 1</h1>
        <widget></widget>
    `
})

export class Portlet1Component implements PortletComponentRef, OnInit {
    @ViewChild(WidgetComponent) widget: WidgetComponent;

    constructor() { }

    ngOnInit() { }
}