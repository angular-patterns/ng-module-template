import { HttpErrorResponse } from "@angular/common/http";
import { ErrorFormatter } from "../shared/error-formatter";
import { Error } from "../shared/error.model";

export class HttpErrorResponseFormatter implements ErrorFormatter {
    canFormat(error: any): boolean {
        return error.name == 'HttpErrorResponse';
    }
    format(error: any): Error {
        let httpError = <HttpErrorResponse>error;
        return {
            name: httpError.name,
            message: httpError.message,
            stack: '',
            status: httpError.status,
            statusText: httpError.statusText,
            url: httpError.url,
            headers: httpError.headers.keys().map(t=> t + '=' + httpError.headers.get(t)).join(',')
        }
    }
    
}