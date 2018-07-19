import { Injectable, Inject } from "@angular/core";
import { OptionsLookupService } from "../dynamic-options/services/options-lookup.service";
import { IdService } from "./id.service";




@Injectable()
export class OptionsFactory {
    constructor(private optionsLookupService: OptionsLookupService, private idService: IdService) {

    }

    createOptions(name: string) {
        var widgetRef = this.optionsLookupService.find(name);
        var options = JSON.parse(JSON.stringify(widgetRef.default));
        if (options.model) {
            options.model = this.idService.newId(widgetRef.name);
        }
        return options;
    }
}