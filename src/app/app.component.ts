import { Component, OnInit } from '@angular/core';
import { MessageService } from "@portal/core";

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    constructor(private messageService:MessageService) {
        this.messageService.changePortal('default-template');
        this.messageService.pushWidgets([
            { widget: 'inbox-widget', location: 1 },
            { widget: 'address-widget', location: 1 },
            { widget: 'app-widget', location: 1 },
            { widget: 'edoc-widget', location: 1 },
            { widget: 'inquiry-widget', location: 1 },
            { widget: 'rfr-widget', location: 1 },
            { widget: 'scholarship-widget', location: 1 },
            
        ]);
     }

    ngOnInit() { }
}