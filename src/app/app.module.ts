import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  imports:      [ BrowserModule, ModalModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
