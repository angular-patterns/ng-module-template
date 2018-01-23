import { NgModule, ErrorHandler, InjectionToken } from '@angular/core';
import { GlobalErrorHandler } from './error-handlers/global-error.handler';
import { Injector } from '@angular/core';
import { Logger } from './logger';
import { HttpClientModule } from '@angular/common/http';
import { ErrorFormatter } from './shared/error-formatter';
import { ErrorFormatterFactory } from './error-handlers/error-formatter.factory';
import { HttpErrorResponseFormatter } from './error-formatters/httpErrorResponseFormatter';
import { DefaultErrorFormatter } from './error-formatters/defaultErrorFormatter';

export function initErrorFormatterFactory(
    httpErrorResponseFormatter: HttpErrorResponseFormatter,
    defaultErrorFormatter: DefaultErrorFormatter
) {
    return new ErrorFormatterFactory([
        httpErrorResponseFormatter,
        defaultErrorFormatter
    ]);
}
@NgModule({
    imports: [HttpClientModule],
    exports: [],
    declarations: [],
    providers: [
        Logger,
        DefaultErrorFormatter,
        HttpErrorResponseFormatter,
        { provide: ErrorFormatterFactory, useFactory: initErrorFormatterFactory, deps: [HttpErrorResponseFormatter, DefaultErrorFormatter]},
        { provide: ErrorHandler, useClass: GlobalErrorHandler, deps: [Injector] }
    ],
})
export class CoreModule { }
