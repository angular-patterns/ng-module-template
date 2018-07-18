import { Injectable, Inject } from "@angular/core";
import { widgetRefToken, WidgetRef, Widget } from "../models/widget.model";
import { WidgetLookupService } from "./widget-lookup.service";
import { IdService } from "./id.service";


@Injectable()
export class OptionsFactory {
    constructor(private widgetLookupService: WidgetLookupService, private idService: IdService) {

    }

    createOptions(name: string) {
        var widgetRef = this.widgetLookupService.find(name);
        var options = JSON.parse(JSON.stringify(widgetRef.defaultOptions));
        if (options.model) {
            options.model = this.idService.newId(widgetRef.name);
        }
        return options;
    }
}