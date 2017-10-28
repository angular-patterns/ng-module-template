import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'missing-widget',
    templateUrl: 'missing-widget.component.html'
})

export class MissingWidgetComponent implements OnInit {
    @Input() key: string;
    constructor() { }

    ngOnInit() { }
}