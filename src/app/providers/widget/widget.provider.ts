
import { Type } from "@angular/core";
import { Widget } from "../../model/widget.model";


export interface WidgetProviderOptions {
    missingComponent: Type<any>;

}

export class WidgetProvider {
    private options: WidgetProviderOptions;
    private widgets: { [key:string]: Widget };

    constructor() {
        this.options = null;
        this.widgets = {};
    }

    findWidget(key:string) {
        if (this.widgets.hasOwnProperty(key))
            return this.widgets[key];

        if (this.options == null || this.options.missingComponent == null) {
            throw new Error (`WidgetProvider: No widget registered with key "${key}"`);
        }

        return {
            key: key,
            type: this.options.missingComponent
        }
    }


    static register(widgets:Widget[], options:WidgetProviderOptions = null): WidgetProvider {
        var widgetProvider = new WidgetProvider();
        widgets.forEach(t=> {
            widgetProvider.widgets[t.key] = t;
        });

        if (options != null) {
            widgetProvider.options = options;
        }
        
        return widgetProvider;

    }


}