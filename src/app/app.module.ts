import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GlobalErrorHandler } from './error/global-error.handler';
import { Injector } from '@angular/core';
import { LogHandler } from './error/handlers/log-handler';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Logger } from './logger/logger';
import { ModalModule, ModalService, RouterModalModule } from 'ng-bootstrap-modal';
import { ErrorComponent } from './error.component';
import { ErrorPageHandler } from './error/handlers/error-page.handler';
import { RetryHttpInterceptor } from './interceptors/retry-http.interceptor';
import { RouterModule } from '@angular/router';


@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpClientModule, 
    ModalModule.forRoot([
      { name:'error', component: ErrorComponent }
    ])
  ],
  declarations: [ AppComponent, ErrorComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    Logger,
    LogHandler, 
    ErrorPageHandler,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RetryHttpInterceptor,
      multi: true
    },   
    { provide: ErrorHandler, useFactory:(injector:Injector)=> {
        return new GlobalErrorHandler(injector)
          .use(LogHandler)
          .use(ErrorPageHandler)
      },
      deps: [Injector]
    }  
  //  {
  //    provide: ErrorHandler, useClass:GlobalErrorHandler, deps:[Injector]
  //  }

  ],
  exports: [AppComponent]
})
export class AppModule {
}
