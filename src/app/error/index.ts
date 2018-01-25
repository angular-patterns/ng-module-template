import { HttpErrorResponseFormatter } from "./formatters/httpErrorResponseFormatter";
import { DefaultErrorFormatter } from "./formatters/defaultErrorFormatter";


export const ERROR_FORMATTERS = [
    HttpErrorResponseFormatter,
    DefaultErrorFormatter
];

export { ErrorInfo } from './shared/error.model';
export { Formatter } from './shared/formatter';
export { ErrorModule } from './error.module';
export { FormatterFactory } from './services/formatter.factory';