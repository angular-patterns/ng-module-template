import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModalModule } from '../modal/modal.module';
import { TestComponent } from './test/test.component';
import { provideRoutes, RouterModule } from '@angular/router';
//import { RouterModule, provideRoutes } from '@angular/router';


@NgModule({
  imports:      [ 
      BrowserModule,
      RouterModule.forRoot([]),
      ModalModule.forRoot([ { name:'test', component: TestComponent }])
     //ModalModule.forRoot([ TestComponent])
    ],
  declarations: [ AppComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
  ],
  exports: [AppComponent]
})
export class AppModule {
}