import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormatterFactory } from "../error-handling/formatter.factory";

@Injectable()
export class Logger {
    constructor(private http: HttpClient, private formatterFactory: FormatterFactory) {

    }

    logError(error: any) {
        let formatterFactory = this.formatterFactory.create(error);
        let formattedError = formatterFactory.format(error);
        console.log(formattedError);
    }
}