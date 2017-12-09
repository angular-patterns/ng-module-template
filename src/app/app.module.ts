import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureModule } from 'modal';
import { TestComponent } from './test.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, 
    RouterModule.forRoot([]), 
    FeatureModule.forRoot([
      { name: 'test', component: TestComponent }
    ])
  ],
  declarations: [ AppComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
