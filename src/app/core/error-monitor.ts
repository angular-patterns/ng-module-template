import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ErrorModel } from "../error-handler/shared/error.model";
import { FormatterFactory } from "../error-handler/formatter.factory";
import { Injectable } from "@angular/core";

@Injectable()
export class ErrorMonitor {
    public error: Observable<ErrorModel>;
    private _error: Subject<ErrorModel>;

    constructor(private formatterFactory: FormatterFactory) {
        this._error = new Subject<ErrorModel>();
        this.error = this._error.asObservable();
    }
    next(error: any) {
        let formatter = this.formatterFactory.create(error);
        this._error.next(formatter.format(error));
    }
}