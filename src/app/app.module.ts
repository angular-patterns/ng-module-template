import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InfoModule } from './info/info.module';

export const url = `${process.env.Environment}`;

@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule,
    InfoModule.forRoot({
      url: url
    }) 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
