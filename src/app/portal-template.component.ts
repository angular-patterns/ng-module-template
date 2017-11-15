import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'portal-template',
    template: `
        <widget-container location="1"></widget-container>
    `
})

export class PortalTemplateComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}