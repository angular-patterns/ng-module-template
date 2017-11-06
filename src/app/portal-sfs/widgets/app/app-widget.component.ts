import { Component, OnInit, Input } from '@angular/core';
import { Widget } from "../../../portal-ui/portal-ui.module";

@Component({
    selector: 'sfs-app-widget',
    templateUrl: 'app-widget.component.html'
})

export class AppWidgetComponent implements OnInit {
    model: Widget;

    constructor() {
        this.model =      {
            "title": "Apply for Post-Secondary Funding",
            "icon": "glyphicon-usd",
            "description": "\n                <p>Begin a new application for Full-Time student aid.</p>\n          <p>\n                    You cannot begin a new application if you currently have an existing work-in-progress application for the same year. If you have a work-in-progress application, complete it or delete it.\n                </p>\n\n        ",
            "points": [
                "Apply for2017-2018 (classes start between01-Aug-2017 and31-Jul-2018)",
                "Apply for2016-2017 (classes start between01-Aug-2016 and31-Jul-2017)",
                
            ]
        };   
    }

    ngOnInit() { }
}