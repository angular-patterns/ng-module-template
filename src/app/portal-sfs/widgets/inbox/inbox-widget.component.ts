import { Component, OnInit, Input } from '@angular/core';
import { Widget } from "../../../portal-ui/portal-ui.module";

@Component({
    selector: 'sfs-inbox-widget',
    templateUrl: 'inbox-widget.component.html'
})

export class InboxWidgetComponent implements OnInit {
    model: Widget;

    constructor() {
        this.model =     {
            "title": "View Inbox",
            "icon": "glyphicon-envelope",
            "description": "View any correspondence that has previously been sent to you.",
            "points": [],
            "link": "letters"
        };     
    }

    ngOnInit() { }
}