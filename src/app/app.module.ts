import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GlobalErrorHandler } from './error-handler/global-error-handler';
import { Injector } from '@angular/core';
import { LogHandler } from './error-handler/log-handler';
import { HttpClientModule } from '@angular/common/http';
import { Logger } from './logger/logger';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: Logger, useClass: Logger },
    { provide: LogHandler, useClass: LogHandler },
    { provide: ErrorHandler, 
      useFactory: 
      (injector:Injector)=> { 
         return new GlobalErrorHandler(injector)
          .use(LogHandler);
      
      }, deps: [Injector]}
  ],
  exports: [AppComponent]
})
export class AppModule {
}
