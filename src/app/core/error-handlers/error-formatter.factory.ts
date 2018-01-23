import { Injectable, Inject } from "@angular/core";
import { ErrorFormatter } from "../shared/error-formatter";
import { ErrorFormatterToken } from "../core.module";

@Injectable()
export class ErrorFormatterFactory {
    constructor(@Inject(ErrorFormatterToken) private errorFormatters: ErrorFormatter[]) {
    }

    create(error: any) {
        let formatters = this.errorFormatters.filter(t=> t.canFormat(error));
        return formatters[0];
    }


}