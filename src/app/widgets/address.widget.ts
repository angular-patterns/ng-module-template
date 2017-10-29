import { Component, Input } from '@angular/core';
import { Widget } from "../widget/widget.model";


@Component({
  selector: 'address',
  template: `
    <widget [widget]="widget">
    <div [outerHTML]="widget.description"></div>
    </widget>
  `
})
export class AddressWidget { 
    widget: Widget;    

    constructor() {
        this.widget =     {
            "title": "Update Address and Notification Preference",
            "icon": "glyphicon-home",
            "description": "\n                          Update your address and notification preference details. You should also update your address and notification preference with Student Aid Alberta Service Centre, the National Student Loans Service Centre and any other lending institution where you may have students loans.\n \n        ",
            "points": [],
            "category": "right",
            "module": "/address",
            "custom": false
        };
    }
    
}
