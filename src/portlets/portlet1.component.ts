import { Component, OnInit, ViewChild } from '@angular/core';
import { WidgetComponent } from "../app/widget/widget.component";
import { PortletComponentRef } from "../app/model/model";

@Component({
    selector: 'portlet1',
    template: `
        <h1>Portlet 1</h1>
        hello
        <ng-content></ng-content>
        hello
    `
})

export class Portlet1Component implements  OnInit {
    constructor() { }

    ngOnInit() { }
}