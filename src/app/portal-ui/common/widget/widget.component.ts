import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Widget } from "./widget.model";
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
    selector: 'ui-widget',
    templateUrl: 'widget.component.html',
    styleUrls: ['widget.component.css'],
    animations: [
        trigger('myanimation', [
            state('fadein', style({
                opacity: 0
            })),
            state('fadeout', style({
                opacity: 1
            })),
            transition('fadein <=> fadeout', animate('1000ms ease-in'))
        ])
    ]
})

export class WidgetComponent implements OnInit, AfterViewInit {
    @Input() model: Widget;
    state: string = 'fadein';

    constructor() { }

    animateMe() {
        this.state = this.state == "fadein" ? "fadeout": "fadein";
    }
    ngAfterViewInit(): void {
        setTimeout(t=> {
            this.animateMe();
        },0);
    }

    ngOnInit() { }
}