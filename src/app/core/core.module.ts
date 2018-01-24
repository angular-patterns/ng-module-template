import { NgModule, ErrorHandler, Injector, InjectionToken, Component, OnInit} from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Logger } from './shared/logger';
import { GlobalErrorHandler } from './shared/global-error.handler';
import { ErrorHandlerModule } from '../error-handler/error-handler.module';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RetryInterceptor } from './shared/retry.interceptor';
import { ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { Config } from './shared/config';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule, 
        ErrorHandlerModule,
        ModalModule

    ],
    exports: [],
    declarations: [

    ],
    providers: [
        Logger,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RetryInterceptor,
            multi: true,
        },
        { 
            provide: ErrorHandler, 
            useClass: GlobalErrorHandler, 
            deps: [Injector, Config] 
        }

    ],
    entryComponents: [

    ]
})
export class CoreModule { 
    static forRoot(config: Config): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: Config, useValue: config },
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config, multi: true }
            ]
        }
    }
}
