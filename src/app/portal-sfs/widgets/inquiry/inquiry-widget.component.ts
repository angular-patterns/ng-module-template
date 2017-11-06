import { Component, OnInit, Input } from '@angular/core';
import { Widget } from "../../../portal-ui/portal-ui.module";

@Component({
    selector: 'sfs-inquiry-widget',
    templateUrl: 'inquiry-widget.component.html'
})

export class InquiryWidgetComponent implements OnInit {
    model: Widget;

    constructor() {
        this.model =     {
            "title": "View Inquiry",
            "icon": "glyphicon-info-sign",
            "description": "\n              This option allows you to view previously submitted application details.\n \n        ",
            "points": [],
        };     
    }

    ngOnInit() { }
}