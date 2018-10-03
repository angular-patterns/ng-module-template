import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormRenderingModule } from '../lib/form-rendering/form-rendering.module';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule,
    FormRenderingModule.forRoot()
  
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
