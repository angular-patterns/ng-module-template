import { Injectable, ComponentFactoryResolver } from "@angular/core";
import { Widget } from "./widget.model";
import { Observable } from "rxjs/Observable";
import {  BehaviorSubject } from "rxjs/BehaviorSubject";
import { Message } from "./message.model";
import { of } from "rxjs/observable/of";
import 'rxjs/add/operator/merge';

@Injectable()
export class PortalService {
    public messages$: Observable<Message>;
    private _message: BehaviorSubject<Message>;
    constructor(private widgets: Widget[]) {
        this._message = new BehaviorSubject<Message>(null);
        this.messages$ =  this._message.asObservable();
    }

    push(name: string, location: number) {
        let widgets = this.widgets.filter(t=> t.name === name);
        widgets.map(t=> {
            this._message.next({ name: t.name, location: location, component: t.component})
        });
    }
}