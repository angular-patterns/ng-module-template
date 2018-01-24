import { NgModule, ErrorHandler, Injector, InjectionToken} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Logger } from './logger';
import { GlobalErrorHandler } from './global-error.handler';
import { ErrorHandlerModule } from '../error-handler/error-handler.module';
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
