import { NgModule, ErrorHandler, Injector, InjectionToken, Component, OnInit} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Logger } from './logger';
import { GlobalErrorHandler } from './global-error.handler';
import { ErrorHandlerModule } from '../error-handler/error-handler.module';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ErrorComponent } from './error/error.component';
import { ErrorDevComponent } from './error-dev/error-dev.component';

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
        { provide: ErrorHandler, useClass: GlobalErrorHandler, deps: [Injector] }
    ],
    entryComponents: [
        ErrorComponent,
        ErrorDevComponent
    ]
})
export class CoreModule { }
