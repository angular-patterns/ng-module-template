import { NgModule } from '@angular/core';
import { HttpMonitor } from './http-monitor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { WaitComponent } from './wait/wait.component';
import { CommonModule } from '@angular/common';
import { WaitDisableDirective } from './wait-disable/wait-disable.directive';

@NgModule({
    imports: [ 
        CommonModule
    ],
    exports: [ 
        WaitComponent,
        WaitDisableDirective
    ],
    declarations: [
        WaitComponent,
        WaitDisableDirective
    ],
    providers: [
        HttpMonitor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: RequestInterceptor,
          deps: [HttpMonitor],
          multi: true,
        }
    ],
})
export class WaitHandlerModule { }
