import { NgModule, ErrorHandler, Injector, InjectionToken, Component, OnInit} from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { HttpMonitor } from './services/http-monitor';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { Logger } from './services/logger';
import { RetryInterceptor } from './interceptors/retry.interceptor';
import { ErrorModule } from '../error/error.module';
import { GlobalErrorHandler } from './services/global-error.handler';
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { ErrorDialogComponent } from './ui/error-dialog/error-dialog.component';
import { HttpDisableDirective } from './ui/http-disable/http-disable.directive';


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
