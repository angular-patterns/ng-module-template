import { ErrorModel } from "../shared/error.model";
import { Formatter } from "../shared/formatter";

export class DefaultErrorFormatter implements Formatter {
    canFormat(error: any): boolean {
        return true;
    }
    format(error: any): ErrorModel {
        return {
            id: 0,
            name: 'Error',
            message: error.message,
            stack: error.stack,
            status: error.status,
            statusText: error.statusText,
            url: error.url,
            headers: '',
            createdOn: new Date()
        }
    }   
}