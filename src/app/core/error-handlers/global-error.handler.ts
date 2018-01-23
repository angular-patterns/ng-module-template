import { ErrorHandler, Injector } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Logger } from "../logger";


export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) {   
    }
    handleError(error: any): void {
        try {
            let logger = this.injector.get(Logger);
            logger.logError(error);
        }
        catch (err) {
            console.log(err);
        }
    }
}