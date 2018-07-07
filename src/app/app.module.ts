import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlsModule } from './controls/controls.module';
import { TextboxComponent } from './controls/widgets/textbox/textbox.component';
import { LabelComponent } from './controls/widgets/label/label.component';



@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule, 
    ControlsModule, 
    FormsModule, 
    ReactiveFormsModule,
    CoreModule.withComponents([
      TextboxComponent,
      LabelComponent
    ]) 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
