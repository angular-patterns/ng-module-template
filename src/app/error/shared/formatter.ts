import { ErrorInfo } from "./error.model";




export interface Formatter {
    canFormat(error: any): boolean;
    format(error: any): ErrorInfo;
}