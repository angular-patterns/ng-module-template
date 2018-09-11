import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Platform } from './platform.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  providers: [
    { provide: Platform, useFactory: (injector: Injector) =>  new Platform(injector), deps: [Injector]}
  ]
})
export class AppModule {
  constructor(private platform: Platform) {
  }
}
