import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { WaitHandlerModule } from './wait-handler/wait-handler.module';
import { ErrorComponent } from './error/error.component';
import { ErrorDevComponent } from './error-dev/error-dev.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    WaitHandlerModule,
    ModalModule.forRoot(),
    CoreModule.forRoot({
      errorModal: ErrorDevComponent
    })
  ],
  declarations: [ 
    AppComponent,
    ErrorComponent,
    ErrorDevComponent
  ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  providers: [
  ]
})
export class AppModule {
}
