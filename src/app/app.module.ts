import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PortalModule } from '../portal/portal.module';
import { TestComponent } from './test/test.component';
import { MissingComponent } from './missing/missing.component';
import { AppModule as TimeModule, TimeComponent} from 'time';
import { AppModule as AddressModule, AddressComponent} from 'address';

@NgModule({
  imports: [
    BrowserModule,
    TimeModule,
    AddressModule,
    PortalModule.forRoot([
      { name: 'test', component: TestComponent },
      { name: 'time', component: TimeComponent },
      { name: 'address', component: AddressComponent },
    ], { missing: MissingComponent}),
  ],
  declarations: [
    AppComponent,
    TestComponent,
    MissingComponent
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [AppComponent],
  entryComponents: [
    
  ]
})
export class AppModule {
}
