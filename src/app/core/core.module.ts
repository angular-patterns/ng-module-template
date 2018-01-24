import { NgModule, ErrorHandler, Injector, InjectionToken, Component, OnInit} from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Logger } from './logger';
import { GlobalErrorHandler } from './global-error.handler';
import { ErrorHandlerModule } from '../error-handler/error-handler.module';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ErrorComponent } from './error/error.component';
import { ErrorDevComponent } from './error-dev/error-dev.component';
import { RetryInterceptor } from './retry.interceptor';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule, 
        ErrorHandlerModule,
        ModalModule.forRoot()

    ],
    exports: [],
    declarations: [
        ErrorComponent,
        ErrorDevComponent
    ],
    providers: [
        Logger,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RetryInterceptor,
            multi: true,
        },
        { provide: ErrorHandler, useClass: GlobalErrorHandler, deps: [Injector] }

    ],
    entryComponents: [
        ErrorComponent,
        ErrorDevComponent
    ]
})
export class CoreModule { }
