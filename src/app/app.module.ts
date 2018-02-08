import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { ParseDatePipe } from './time/parse-date.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TimeComponent, ParseDatePipe ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent, TimeComponent, ParseDatePipe]
})
export class AppModule {
}
