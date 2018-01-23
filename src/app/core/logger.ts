import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ErrorFormatterFactory } from "./error-handlers/error-formatter.factory";

@Injectable()
export class Logger {
    constructor(private http: HttpClient, private errorFormatterFactory: ErrorFormatterFactory) {

    }

    logError(error: any) {
        const formatterFactory = this.errorFormatterFactory.create(error);
        const formattedError = formatterFactory.format(error);
        console.log(formattedError);
    }
}