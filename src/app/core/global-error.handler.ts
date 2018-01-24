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
import { ErrorModel } from "../error-handler/shared/error.model";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    lastError: Observable<ErrorModel>;
    _lastError: Subject<ErrorModel>;
    constructor(private injector: Injector) { 
        this._lastError = new Subject<ErrorModel>();
        this.lastError = this._lastError.asObservable();
    }
    handleError(error: any): void {
        let lastError = this.getErrorModel(error);
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

    getErrorModel(error: any) {
        try {
            let formatterFactory = this.injector.get(FormatterFactory);
            let formatter = formatterFactory.create(error);
            let errorModel = formatter.format(error);
            return errorModel;
        }
        catch (err) {
            console.log(err);
        }
        return new ErrorModel();
    }

    showModal(error: ErrorModel) {
        try {
            let modalService = this.injector.get(BsModalService);
            let bsModalRef = modalService.show(ErrorDevComponent);
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
    logError(error: ErrorModel) {
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