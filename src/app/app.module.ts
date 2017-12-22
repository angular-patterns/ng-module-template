import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PortalModule } from '../portal/portal.module';
import { TestComponent } from './test/test.component';
import { AppModule as TimeModule, TimeComponent } from 'time';

@NgModule({
  imports: [
    BrowserModule,
    PortalModule.forRoot([
      { name: 'test', component: TestComponent },
      { name: 'time', component: TimeComponent}
    ]),
    TimeModule
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
