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
    messages$: Observable<Message[]>;
    constructor(private messageService:MessageService) {
        this.messages$ = this.messageService.messages$
            .map(t=>t.filter(x=>x.location == this.location));
     }

    ngOnInit() { }
}