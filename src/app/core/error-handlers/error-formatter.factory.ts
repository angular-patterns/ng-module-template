import { Injectable } from "@angular/core";
import { ErrorFormatter } from "../shared/error-formatter";

@Injectable()
export class ErrorFormatterFactory {
    constructor(private errorFormatters: ErrorFormatter[]) {

    }

    create(error: any) {
        let formatters = this.errorFormatters.filter(t=> t.canFormat(error));
        return formatters[0];
    }


}