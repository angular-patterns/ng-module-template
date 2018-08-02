import { Injectable, Inject } from "@angular/core";
import { WidgetRef, Widget } from "../shared";


@Injectable()
export class WidgetFactory {
    constructor() {

    }

    createWidget(widgetRef: WidgetRef, options: any) {
        var widget = new Widget();
        widget.component = widgetRef.name;
        widget.options = JSON.parse(JSON.stringify(options));
        return widget;
    }
}