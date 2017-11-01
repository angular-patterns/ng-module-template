import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from '../model/model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 

@Component({
    selector: 'widget-container',
    templateUrl: 'widget-container.component.html'
})      

export class WidgetContainerComponent implements OnInit {
    @Input() location: number;
    names$: Observable<string[]>;
    constructor(private messageService:MessageService) {
        this.names$ = this.messageService.messages$
            .map(t=>t.filter(x=>x.location == this.location))
            .map(t=>t.map(x=>x.widgetName));
     }

    ngOnInit() { }
}