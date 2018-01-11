import { Injectable, Type } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { WidgetFactory } from "./widget.factory";
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/publish';

@Injectable()
export class PortalService {
    public widgets: Observable<{[key: string]: Type<any>[]}>;
    private _widgets: ReplaySubject<{[key: string]: Type<any>[]}>; 

    constructor(private widgetFactory:WidgetFactory) {
        this._widgets = new ReplaySubject<{[key: string]: Type<any>[]}>();
        this.widgets = this._widgets.asObservable();
    }

    push (key: string, widgetKeys: string[]) {
        
        let widgets = widgetKeys.map(key => this.widgetFactory.resolve(key));
        let widgetTypes = widgets.map(t=>t.component);
        let event = (<any>{});
        event[key] = widgetTypes;
        this._widgets.next(event);
    }


}