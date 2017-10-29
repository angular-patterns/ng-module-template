import { Component, Input } from '@angular/core';
import { Widget } from "../widget/widget.model";


@Component({
  selector: 'inquiry',
  template: `
    <widget [widget]="widget">
    <div [outerHTML]="widget.description"></div>
    </widget>
  `
})
export class InquiryWidget { 
    widget: Widget;    

    constructor() {
        this.widget =       {
            "title": "View Inquiry",
            "icon": "glyphicon-info-sign",
            "description": "\n              This option allows you to view previously submitted application details.\n \n        ",
            "points": [],
            "category": "right",
            "module": "/inquiry",
            "custom": false
        };
    }
    
}
