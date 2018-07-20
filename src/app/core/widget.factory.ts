import { Injectable, Inject } from "@angular/core";

import { OptionsFactory } from "./options.factory";
import { WidgetRef, Widget } from "../../framework/dynamic/models/widget.model";


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