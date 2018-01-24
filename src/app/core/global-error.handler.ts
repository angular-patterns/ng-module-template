import { ErrorHandler, Injector } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Logger } from "./logger";

import 'rxjs/add/operator/catch';


export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) {   
    }
    handleError(error: any): void {
        try {
            const logger = this.injector.get(Logger);
            logger.logError(error).toPromise();
        }
        catch (err) {
            console.log(err);
        }
        finally {
            alert('Something went wrong');
        }
    }
}