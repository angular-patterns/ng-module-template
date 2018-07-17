import { Injectable, Inject } from "@angular/core";
import { widgetRefToken, WidgetRef, Widget } from "../models/widget.model";


@Injectable()
export class WidgetFactory {
    constructor(@Inject(widgetRefToken) private widgetRefs: WidgetRef[]) {

    }

    createWidget(widgetRef: WidgetRef) {
        var widget = new Widget();
        widget.component = widgetRef.name;
        widget.options = JSON.parse(JSON.stringify(widgetRef.defaultOptions));
        return widget;
    }
}