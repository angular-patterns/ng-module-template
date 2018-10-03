import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormlyCommonModule } from '../lib/formly-common/formly-common.module';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule,
    FormlyCommonModule,
   FormlyModule.forRoot()
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
