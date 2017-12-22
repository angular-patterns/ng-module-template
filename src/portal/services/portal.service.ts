import { Injectable, ComponentFactoryResolver } from "@angular/core";
import { Widget } from "./widget.model";
import { Observable } from "rxjs/Observable";
import {  BehaviorSubject } from "rxjs/BehaviorSubject";
import { Message, InternalMessage } from "./message.model";
import { of } from "rxjs/observable/of";
import 'rxjs/add/operator/merge';

@Injectable()
export class PortalService {
    public messages$: Observable<InternalMessage[]>;
    private _messages: BehaviorSubject<InternalMessage[]>;
    constructor(private widgets: Widget[]) {
        this._messages = new BehaviorSubject<InternalMessage[]>([]);
        this.messages$ =  this._messages.asObservable();
    }

    push(messages: Message[]) {
        let msg = messages.map(t=> {
            return  {
                name: t.name,
                location: t.location,
                component: this.widgets.filter(x=> x.name == t.name).pop().component
            }
        })        

        this._messages.next(msg);
    }
}