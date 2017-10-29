import { Component, Input } from '@angular/core';
import { Widget } from "../widget/widget.model";


@Component({
  selector: 'rfr',
  template: `
    <widget [widget]="widget">
    <div [outerHTML]="widget.description"></div>
    </widget>
  `
})
export class RfrWidget { 
    widget: Widget;    

    constructor() {
        this.widget =      {
            "title": "Request for Review",
            "icon": "glyphicon-list-alt",
            "description": "\n                <p>This option allows you to request a review if you are not satisfied with a decision made by Student Aid Alberta on your application:</p>\n        ",
            "points": [
                "Continue working on your Request for Review (Work-in-Progress)",
                "Make changes to your processed Student Aid Alberta application",
                "To submit additional Request for Review documents such as disability-related documents",
                "View the status of previously submitted application changes or requests for review"
            ],
            "category": "center",
            "module": "/review",
            "custom": false
        };
    }
    
}
