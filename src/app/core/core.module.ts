import { NgModule, ErrorHandler, Injector, InjectionToken, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';

import { WaitInterceptor } from './interceptors/wait.interceptor';
import { RetryInterceptor } from './interceptors/retry.interceptor';

import { WaitMonitor } from './services/wait.monitor';
import { GlobalErrorHandler } from './services/global-error.handler';
import { Logger } from './services/logger';

import { ErrorModule } from '../error/error.module';
import { ErrorDialogComponent } from './ui/error-dialog/error-dialog.component';
import { WaitDisableDirective } from './ui/wait-disable/wait-disable.directive';
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { WaitComponent } from './ui/wait/wait.component';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule, 
        ErrorModule,
        ModalModule

    ],
    exports: [
        SpinnerComponent,
        WaitComponent,
        WaitDisableDirective

    ],
    declarations: [
        SpinnerComponent,
        WaitComponent,
        ErrorDialogComponent,
        WaitDisableDirective,
    ],
    providers: [
        Logger,
        WaitMonitor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: WaitInterceptor,
          deps: [WaitMonitor],
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
