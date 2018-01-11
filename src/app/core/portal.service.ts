import { Injectable, Type } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { WidgetFactory } from "./widget.factory";
import 'rxjs/add/operator/shareReplay';

@Injectable()
export class PortalService {
    public widgets: Observable<{[key: string]: Type<any>[]}>;
    private _widgets: Subject<{[key: string]: Type<any>[]}>; 

    constructor(private widgetFactory:WidgetFactory) {
        this._widgets = new Subject<{[key: string]: Type<any>[]}>();
        this.widgets = this._widgets.asObservable().shareReplay(1);
    }

    push (key: string, widgetKeys: string[]) {
        
        let widgets = widgetKeys.map(key => this.widgetFactory.resolve(key));
        let widgetTypes = widgets.map(t=>t.component);
        let event = (<any>{});
        event[key] = widgetTypes;
        this._widgets.next(event);
    }


}