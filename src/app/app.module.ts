import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureModule } from '../feature/feature.module';
import { ModalModule } from 'modal';
import { TestComponent } from './test.component';

@NgModule({
  imports:      [ BrowserModule, FeatureModule, ModalModule.forRoot([{ path: 'test', component: TestComponent, outlet: 'modal' }])],
  declarations: [ AppComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
