import { Error } from "../shared/error.model";
import { Formatter } from "../shared/formatter";

export class DefaultErrorFormatter implements Formatter {
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