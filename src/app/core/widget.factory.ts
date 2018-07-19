import { Injectable, Inject } from "@angular/core";

import { WidgetRef, Widget } from "../dynamic/models/widget.model";
import { OptionsFactory } from "./options.factory";


@Injectable()
export class WidgetFactory {
    constructor(private optionsFactory: OptionsFactory) {

    }

    createWidget(widgetRef: WidgetRef) {
        var widget = new Widget();
        widget.component = widgetRef.name;
        widget.options = this.optionsFactory.createOptions(widgetRef.name);
        return widget;
    }
}