import { NgModule, ErrorHandler, Injector, InjectionToken, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';

import { RequestInterceptor } from './interceptors/request.interceptor';
import { RetryInterceptor } from './interceptors/retry.interceptor';

import { HttpMonitor } from './services/http-monitor';
import { GlobalErrorHandler } from './services/global-error.handler';
import { Logger } from './services/logger';

import { ErrorModule } from '../error/error.module';
import { ErrorDialogComponent } from './ui/error-dialog/error-dialog.component';
import { HttpDisableDirective } from './ui/http-disable/http-disable.directive';
import { SpinnerComponent } from './ui/spinner/spinner.component';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule, 
        ErrorModule,
        ModalModule

    ],
    exports: [
        SpinnerComponent,
        HttpDisableDirective

    ],
    declarations: [
        SpinnerComponent,
        ErrorDialogComponent,
        HttpDisableDirective,
    ],
    providers: [
        Logger,
        HttpMonitor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: RequestInterceptor,
          deps: [HttpMonitor],
          multi: true,
        }, 
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RetryInterceptor,
            multi: true,
        },

        { 
            provide: ErrorHandler, 
            useClass: GlobalErrorHandler, 
            deps: [Injector] 
        }

    ],
    entryComponents: [
        ErrorDialogComponent
    ]
})
export class CoreModule { 
}
