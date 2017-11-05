import { Component, OnInit, Input } from '@angular/core';
import { Widget } from "./widget.model";

@Component({
    selector: 'ui-widget',
    templateUrl: 'widget.component.html',
    styleUrls: ['widget.component.css']
})

export class WidgetComponent implements OnInit {
    @Input() model:Widget;
    constructor() { }

    ngOnInit() { }
}