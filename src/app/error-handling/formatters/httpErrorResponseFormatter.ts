import { HttpErrorResponse } from "@angular/common/http";
import { Error } from "../shared/error.model";
import { Formatter } from "../shared/formatter";

export class HttpErrorResponseFormatter implements Formatter {
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