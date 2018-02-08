import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { TimeModule } from '../../public_api';

@NgModule({
  imports:      [ BrowserModule, TimeModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
