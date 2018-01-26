import { ErrorHandler, Injector, Injectable, Component, OnInit, NgZone } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { BsModalService } from "ngx-bootstrap/modal";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { Logger } from "./logger";

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {  FormatterFactory } from "../../error/index";
import { ErrorDialogComponent } from "../ui/error-dialog/error-dialog.component";
import { ErrorInfo } from "../shared/error.model";

const production = process.env.Environment === 'Production';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    showDetail: boolean;
    lastError: Observable<ErrorInfo>;
    _lastError: Subject<ErrorInfo>;
    constructor(private injector: Injector) {
        this._lastError = new Subject<ErrorInfo>();
        this.lastError = this._lastError.asObservable();
        this.showDetail = production;
    }
    handleError(error: any): void {
        let lastError = this.getErrorInfo(error);
        let modalService = this.injector.get(BsModalService);
        if (modalService.getModalsCount() == 0) {
            this.injector.get(NgZone).run(t => {
                this.logError(lastError).then(
                    t => this._lastError.next(t),
                    err => this._lastError.next(lastError)
                );
                this.showModal(lastError);
            });

        }
        else {
            console.log(lastError);
        }

    }

    getErrorInfo(error: any) {
        try {
            let formatterFactory = this.injector.get(FormatterFactory);
            let formatter = formatterFactory.create(error);
            let errorModel = formatter.format(error);
            return errorModel;
        }
        catch (err) {
            console.log(err);
        }
        return new ErrorInfo();
    }

    showModal(error: ErrorInfo) {
        try {
            let modalService = this.injector.get(BsModalService);
            let bsModalRef = modalService.show(ErrorDialogComponent);
            bsModalRef.content.error = error;
            bsModalRef.content.showDetail = this.showDetail;

            return new Promise((resolve, reject) => {
                modalService.onHide.subscribe(t => {
                    resolve(error);
                });
            });
        }
        catch (err) {
            console.log(err);
        }
        return Promise.resolve(error);



    }
    logError(error: ErrorInfo) {
        try {

            const logger = this.injector.get(Logger);
            return logger.logError(error).catch(t=> Observable.of(error)).toPromise();
        }
        catch (err) {
            console.log(err);
        }
        return Promise.resolve(error);
    }
}