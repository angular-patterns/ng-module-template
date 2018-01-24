import { HttpErrorResponseFormatter } from "./formatters/httpErrorResponseFormatter";
import { DefaultErrorFormatter } from "./formatters/defaultErrorFormatter";


export const ERROR_FORMATTERS = [
    HttpErrorResponseFormatter,
    DefaultErrorFormatter
];

export { ErrorInfo } from './shared/error.model';
export { Formatter } from './shared/formatter';
export { ErrorHandlerModule } from './error-handler.module';
export { FormatterFactory } from './shared/formatter.factory';