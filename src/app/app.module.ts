import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureModule } from '../feature/feature.module';
import { FirstNameComponent } from './fields/first-name/first-name.component';
import { LastNameComponent } from './fields/last-name/last-name.component';
import { Template1Component } from './forms/template1/template1.component';
import { Template2Component } from './forms/template2/template2.component';
import { ScholarshipListComponent } from './scholarship-list/scholarship-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [
     BrowserModule, 
     FeatureModule,
     HttpClientModule
    ],
  declarations: [ 
    AppComponent,
    FirstNameComponent,
    LastNameComponent,
    Template1Component,
    Template2Component,
    ScholarshipListComponent
  ],
  bootstrap:[ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
