import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PortalModule } from '../portal/portal.module';
import { TestComponent } from './test/test.component';
import { AppModule as TimeModule, TimeComponent } from 'time';
import { AppModule as WeatherModule, WeatherComponent } from 'weather';
import { AppModule as AddressModule, AddressComponent } from 'address';

@NgModule({
  imports: [
    BrowserModule,
    PortalModule.forRoot([
      { name: 'test', component: TestComponent },
      { name: 'time', component: TimeComponent},
      { name: 'weather', component: WeatherComponent },
      { name: 'address', component: AddressComponent }
    ]),
    TimeModule, 
    WeatherModule,
    AddressModule
  ],
  declarations: [
    AppComponent,
    TestComponent
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [AppComponent]
})
export class AppModule {
}
