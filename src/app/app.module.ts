import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { WaitHandlerModule } from './wait-handler/wait-handler.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    WaitHandlerModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  providers: [
  ]
})
export class AppModule {
}
