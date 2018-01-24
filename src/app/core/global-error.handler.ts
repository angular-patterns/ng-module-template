import { ErrorHandler, Injector, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Logger } from "./logger";

import 'rxjs/add/operator/catch';
import { BsModalService } from "ngx-bootstrap/modal";

import { Component, OnInit } from '@angular/core';
import { ErrorComponent } from "./error/error.component";
import { ErrorDevComponent } from "./error-dev/error-dev.component";

import { NgZone } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { FormatterFactory } from "../error-handler/formatter.factory";
import { ErrorInfo } from "../error-handler/shared/error.model";
import { Config } from "./shared/config";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    lastError: Observable<ErrorInfo>;
    _lastError: Subject<ErrorInfo>;
    constructor(private injector: Injector, private config: Config) { 
        this._lastError = new Subject<ErrorInfo>();
        this.lastError = this._lastError.asObservable();
    }
    handleError(error: any): void {
        let lastError = this.getErrorInfo(error);
        let modalService = this.injector.get(BsModalService);
        if (modalService.getModalsCount() == 0) {
            this.injector.get(NgZone).run(t=> {
                this.logError(lastError).then(
                    t => this._lastError.next(t), 
                    err=> this._lastError.next(lastError)
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
            let bsModalRef = modalService.show(this.config.errorModal);
            bsModalRef.content.error = error;
            return new Promise((resolve, reject)=> {
                modalService.onHide.subscribe(t=> {
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
            return logger.logError(error).toPromise();
        }
        catch (err) {
            console.log(err);
        }
        return Promise.resolve(error);
    }
}