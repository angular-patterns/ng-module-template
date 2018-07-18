import { Injectable, Inject } from "@angular/core";
import { widgetRefToken, WidgetRef, Widget } from "../models/widget.model";
import { OptionsFactory } from "./options.factory";


@Injectable()
export class WidgetFactory {
    constructor(@Inject(widgetRefToken) private widgetRefs: WidgetRef[], private optionsFactory: OptionsFactory) {

    }

    createWidget(widgetRef: WidgetRef) {
        var widget = new Widget();
        widget.component = widgetRef.name;
        widget.options = this.optionsFactory.createOptions(widgetRef.name);
        return widget;
    }
}