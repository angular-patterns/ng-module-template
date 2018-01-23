import { ErrorFormatter } from "../shared/error-formatter";
import { Error } from "../shared/error.model";

export class DefaultErrorFormatter implements ErrorFormatter {
    canFormat(error: any): boolean {
        return true;
    }
    format(error: any): Error {
        return {
            name: 'Error',
            message: error.message,
            stack: error.stack,
            status: error.status,
            statusText: error.statusText,
            url: error.url,
            headers: ''
        }
    }   
}