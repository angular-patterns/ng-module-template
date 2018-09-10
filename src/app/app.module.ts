import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmbeddedFrameComponent } from './embedded-frame/embedded-frame.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule,ModalModule.forRoot(), HttpClientModule ],
  declarations: [ AppComponent, EmbeddedFrameComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
