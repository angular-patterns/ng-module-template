import { DefaultErrorFormatter } from "./error-formatters/defaultErrorFormatter";
import { HttpErrorResponseFormatter } from "./error-formatters/httpErrorResponseFormatter";

export const ERROR_FORMATTERS = [DefaultErrorFormatter, HttpErrorResponseFormatter]