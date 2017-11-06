import { Component, OnInit } from '@angular/core';
import { MessageService } from "@portal/core";

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    constructor(private messageService:MessageService) {
        //this.messageService.changePortal('three-column-template');
        this.messageService.pushWidgets([
            { widget: 'inbox-widget', location: 1 },
            { widget: 'inquiry-widget', location: 1 },
            { widget: 'time-widget', location: 2 },
            { widget: 'app-widget', location: 2 },
            { widget: 'scholarship-widget', location: 2 },
            { widget: 'rfr-widget', location: 2 },
            { widget: 'edoc-widget', location: 3 },
            { widget: 'address-widget', location: 3 },
            { widget: 'weather-widget', location: 5 },
            { widget: 'address-lookup-widget', location: 4 },

            
        ]);
     }

    ngOnInit() { }
}