import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TimeComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent, TimeComponent]
})
export class AppModule {
}
