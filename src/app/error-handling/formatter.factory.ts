import { Injectable, Inject } from "@angular/core";
import { Formatter } from "./shared/formatter";
import { FormatterToken } from "../core/core.module";

@Injectable()
export class FormatterFactory {
    constructor(@Inject(FormatterToken) private errorFormatters: Formatter[]) {
    }

    create(error: any) {
        let formatters = this.errorFormatters.filter(t=> t.canFormat(error));
        return formatters[0];
    }


}