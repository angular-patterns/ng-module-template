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
            { widget: 'address-widget', location: 1 }
        ]);
     }

    ngOnInit() { }
}