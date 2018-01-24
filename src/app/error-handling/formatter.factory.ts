import { Injectable, Inject } from "@angular/core";
import { Formatter } from "./shared/formatter";
import { FormatterToken } from "./error-handler.module";

@Injectable()
export class FormatterFactory {
    constructor(private errorFormatters: Formatter[]) {
    }

    create(error: any) {
        let formatters = this.errorFormatters.filter(t=> t.canFormat(error));
        return formatters[0];
    }


}