import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    CoreModule
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  providers: [
  ]
})
export class AppModule {
}
