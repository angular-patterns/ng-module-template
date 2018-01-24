import { HttpClient } from "@angular/common/http";
import { Injectable, Injector, Inject  } from "@angular/core";
import { FormatterFactory } from "../error-handler/formatter.factory";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import { ErrorInfo } from "../error-handler/shared/error.model";

@Injectable()
export class Logger {
    constructor(private http: HttpClient) {

    }

    logError(error: ErrorInfo) {
        return this.http.post<ErrorInfo>(`http://localhost:3000/errors`, error);
    }
}