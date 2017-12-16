import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureModule } from '../feature/feature.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConceptComponent } from './concept/concept.component';

@NgModule({
  imports:      [ BrowserModule, FeatureModule],
  declarations: [ AppComponent, ConceptComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
