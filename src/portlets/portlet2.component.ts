import { Component, OnInit, ViewChild } from '@angular/core';
import { WidgetComponent } from "../app/widget/widget.component";
import { PortletComponentRef } from "../app/model/model";

@Component({
    selector: 'portlet2',
    template: `
        <h1>Portlet 2</h1>
        <ng-content></ng-content>
    `
})

export class Portlet2Component implements OnInit {

    constructor() { }

    ngOnInit() { }
}



