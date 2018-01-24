import { HttpClient } from "@angular/common/http";
import { Injectable, Injector, Inject  } from "@angular/core";
import { FormatterFactory } from "../error-handler/formatter.factory";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

@Injectable()
export class Logger {
    constructor(private http: HttpClient, private formatterFactory: FormatterFactory) {

    }

    logError(error: any) {
        let formatter = this.formatterFactory.create(error);
        let formattedError = formatter.format(error);
        return this.http.post(`http://localhost:3000/errors`, formattedError);
    }
}