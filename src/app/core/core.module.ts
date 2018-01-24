import { NgModule, ErrorHandler, Injector, InjectionToken} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Logger } from './logger';
import { GlobalErrorHandler } from './global-error.handler';
import { FormatterFactory } from '../error-handling/formatter.factory';
import { ErrorHandlerModule } from '../error-handling/error-handler.module';
import { Formatter } from '../error-handling/shared/formatter';
@NgModule({
    imports: [
        HttpClientModule, 
        ErrorHandlerModule
    ],
    exports: [],
    declarations: [],
    providers: [
        Logger,
        { provide: ErrorHandler, useClass: GlobalErrorHandler, deps: [Injector] }
    ],
})
export class CoreModule { }
