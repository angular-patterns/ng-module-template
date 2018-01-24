import { ErrorHandler, Injector } from "@angular/core";
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
import { ErrorMonitor } from "./error-monitor";
import { FormatterFactory } from "../error-handler/formatter.factory";
import { ErrorModel } from "../error-handler/shared/error.model";

export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) { 
    }
    handleError(error: any): void {
        const errorModel = this.getErrorModel(error);
        this.logError(errorModel);
        this.showModal(errorModel);

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
        let modalService = this.injector.get(BsModalService);
        this.injector.get(NgZone).run(t=> {
            let bsModalRef = modalService.show(ErrorDevComponent);
            bsModalRef.content.error = error;
    
        });
    }
    logError(error: ErrorModel) {
        try {
            const logger = this.injector.get(Logger);
            logger.logError(error).toPromise();
        }
        catch (err) {
            console.log(err);
        }
    }
}