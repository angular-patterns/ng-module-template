import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sample-widget',
    template: `
        This is a sample widget.
    `
})

export class SampleWidgetComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}