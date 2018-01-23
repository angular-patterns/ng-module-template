import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ErrorFormatterFactory } from "./error-handlers/error-formatter.factory";

@Injectable()
export class Logger {
    constructor(private http: HttpClient, private errorFormatterFactory: ErrorFormatterFactory) {

    }

    logError(error: any) {
        let formatterFactory = this.errorFormatterFactory.create(error);
        let formattedError = formatterFactory.format(error);
        console.log(formattedError);
    }
}