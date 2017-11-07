import { Component, OnInit, Input } from '@angular/core';
import { Widget } from "../../../portal-ui/portal-ui.module";

@Component({
    selector: 'sfs-scholarship-widget',
    templateUrl: 'scholarship-widget.component.html'
})

export class ScholarshipWidgetComponent implements OnInit {
    model: Widget;

    constructor() {
        this.model =     {
            "title": "Apply for the Alexander Rutherford High School Achievement Scholarship",
            "icon": "glyphicon-list-alt",
            "description": "\n               <p>You must be accepted for full-time studies at a post-secondary institution before you can apply. If your study date is after31-Jul-2018, you cannot use this application. Apply on the2018-2019 application when it is available online.</p>\n                \n                <p>\n                You cannot begin a new application if you currently have an existing work-in-progress application for the same year. If you have a work-in-progress application, complete it or delete it.\n                </p>\n\n        ",
            "points": [
                "<a href='newrutherfordapplication'>Apply for 2017-2018 (classes start between01-Aug-2017 and31-Jul-2018) or previous years</a>"
            ],    
            "link": ""    
        };     
    }

    ngOnInit() { }
}