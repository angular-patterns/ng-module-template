import { Injectable, ComponentFactoryResolver, Type } from "@angular/core";
import { Widget } from "./widget.model";
import { Observable } from "rxjs/Observable";
import {  BehaviorSubject } from "rxjs/BehaviorSubject";
import { Message, InternalMessage } from "./message.model";
import { of } from "rxjs/observable/of";
import 'rxjs/add/operator/merge';
import { Inject } from "@angular/core";
//import { widgetsToken } from "../portal.module";

@Injectable()
export class PortalService {
    public messages$: Observable<InternalMessage[]>;
    private _messages: BehaviorSubject<InternalMessage[]>;
    constructor(private widgets: Widget[]) {
        this._messages = new BehaviorSubject<InternalMessage[]>([]);
        this.messages$ =  this._messages.asObservable();
    }

    push(messages: Message[]) {
        let types: { [name: string]: Type<any> } = {};
        types = this.widgets.reduce((p, c)=> { p[c.name] = c.component; return p; }, types);
        let msg = messages.map(t=> {
            return {
                name: t.name,
                location: t.location,
                component: types[t.name]
            }
        });
    
        this._messages.next(msg);
    }
}