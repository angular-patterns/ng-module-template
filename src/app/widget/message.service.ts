import { Message } from "../model/model";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
    private messages: BehaviorSubject<Message[]>;
    private portalChange: Subject<string>;
    public messages$: Observable<Message[]>;
    public portalChange$: Observable<string>;

    constructor() {
        this.messages = new BehaviorSubject<Message[]>([]);
        this.portalChange = new Subject<string>();
        this.messages$ = this.messages.asObservable();
        this.portalChange$ = this.portalChange.asObservable();
    
    }
    pushWidgets(messages: Message[]) {
        this.messages.next(messages);
    }
    changePortal(portal: string) {
        this.portalChange.next(portal);
    }


}