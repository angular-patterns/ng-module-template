import { Component, OnInit, Input } from '@angular/core';
import { Widget } from "../../../portal-ui/portal-ui.module";

@Component({
    selector: 'sfs-address-widget',
    templateUrl: 'address-widget.component.html'
})

export class AddressWidgetComponent implements OnInit {
    model: Widget;

    constructor() {
        this.model =     {
            "title": "Update Address and Notification Preference",
            "icon": "glyphicon-home",
            "description": "\n                          Update your address and notification preference details. You should also update your address and notification preference with Student Aid Alberta Service Centre, the National Student Loans Service Centre and any other lending institution where you may have students loans.\n \n        ",
            "points": [],
            "category": "right",
            "module": "/address",
            "custom": false
        };        
     }

    ngOnInit() { }
}