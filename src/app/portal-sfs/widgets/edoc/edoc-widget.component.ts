import { Component, OnInit, Input } from '@angular/core';
import { Widget } from "../../../portal-ui/portal-ui.module";

@Component({
    selector: 'sfs-edoc-widget',
    templateUrl: 'edoc-widget.component.html'
})

export class EdocWidgetComponent implements OnInit {
    model: Widget;

    constructor() {
        this.model =     {
            "title": "Upload Electronic Document(s)",
            "icon": "glyphicon-upload",
            "description": "\n              Update your address and notification preference details. You should also update your address and notification preference with Student Aid Alberta Service Centre, the National Student Loans Service Centre and any other lending institution where you may have students loans.\n \n        ",
            "points": [],
         };     
    }

    ngOnInit() { }
}