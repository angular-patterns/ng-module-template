import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureModule } from '../feature/feature.module';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FeatureModule.forRoot([ { path:'test', component: TestComponent, outlet: 'modal' }]), 
    RouterModule.forRoot([])
  ],
  declarations: [ AppComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
