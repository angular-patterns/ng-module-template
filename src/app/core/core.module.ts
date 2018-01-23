import { NgModule, ErrorHandler, Injector, InjectionToken} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Logger } from './logger';
import { GlobalErrorHandler } from './error-handlers/global-error.handler';
import { ErrorFormatterFactory } from './error-handlers/error-formatter.factory';
import { ERROR_FORMATTERS } from './index';
import { ErrorFormatter } from './shared/error-formatter';

export const ErrorFormatterToken = new InjectionToken<ErrorFormatter[]>("Error Formatters");

@NgModule({
    imports: [HttpClientModule],
    exports: [],
    declarations: [],
    providers: [
        Logger,
        ERROR_FORMATTERS,
        { provide: ErrorFormatterToken, useFactory:(...formatters)=> formatters, deps: ERROR_FORMATTERS},
        { provide: ErrorFormatterFactory, useClass: ErrorFormatterFactory, deps: [ErrorFormatterToken]},
        { provide: ErrorHandler, useClass: GlobalErrorHandler, deps: [Injector] }
    ],
})
export class CoreModule { }
