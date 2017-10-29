import { Component, Input } from '@angular/core';
import { Widget } from "../widget/widget.model";


@Component({
  selector: 'inbox',
  template: `
    <widget [widget]="widget">
    <div [outerHTML]="widget.description"></div>
    </widget>
  `
})
export class InboxWidget { 
    widget: Widget;    

    constructor() {
        this.widget =     {
            "title": "View Inbox",
            "icon": "glyphicon-envelope",
            "description": "View any correspondence that has previously been sent to you.",
            "points": [],
            "category": "left",
            "module": "/inbox",
            "custom": false
        };
    }
    
}
