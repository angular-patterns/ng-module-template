import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyFieldComponent } from './my-field/my-field.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'app-my-field', component: MyFieldComponent },
      ],
    }),
    FormlyBootstrapModule
  ],
  declarations: [ AppComponent, MyFieldComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
