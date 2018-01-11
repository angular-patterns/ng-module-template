import { Injectable, Type } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { WidgetFactory } from "./widget.factory";
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/publish';

@Injectable()
export class PortalService {
    private _widgets: { [key: string]: ReplaySubject<Type<any>[]>}; 
    private _ensureKey(key: string) {
        if (!this._widgets[key]) {
            this._widgets[key] = new ReplaySubject<Type<any>[]>(1);
        }
    }
    constructor(private widgetFactory:WidgetFactory) {
        this._widgets = {}; 
    }


    get(key: string) {
        this._ensureKey(key);
        return this._widgets[key].asObservable();
    }

    push (key: string, widgetKeys: string[]) {
        this._ensureKey(key);

        let widgets = widgetKeys.map(key => this.widgetFactory.resolve(key));
        let widgetTypes = widgets.map(t=>t.component);
        this._widgets[key].next(widgetTypes);
    }


}