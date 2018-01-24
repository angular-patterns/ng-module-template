import { ErrorModel } from "./error.model";

export interface Formatter {
    canFormat(error: any): boolean;
    format(error: any): ErrorModel;
}