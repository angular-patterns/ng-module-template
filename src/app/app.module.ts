import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureModule } from '../feature/feature.module';
import { CoreModule, CommonModule } from '@sa/portal';
import { WidgetComponent } from '../feature/widget.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FeatureModule,
    CoreModule.forRoot([
       { key: 'widget', component: WidgetComponent}
    ]),
    CommonModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
