import { HttpErrorResponseFormatter } from "./formatters/httpErrorResponseFormatter";
import { DefaultErrorFormatter } from "./formatters/defaultErrorFormatter";


export const ERROR_FORMATTERS = [
    HttpErrorResponseFormatter,
    DefaultErrorFormatter
];