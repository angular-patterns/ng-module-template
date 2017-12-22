import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PortalModule } from '../portal/portal.module';
import { TestComponent } from './test/test.component';
import { MissingComponent } from './missing/missing.component';


@NgModule({
  imports: [
    BrowserModule,
    PortalModule.forRoot([
      { name: 'test', component: TestComponent },
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
