import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModalModule } from '../modal/modal.module';
import { TestComponent } from './test/test.component';
//import { RouterModule, provideRoutes } from '@angular/router';

@NgModule({
  imports:      [ 
      BrowserModule,
      ModalModule.forRoot(),
    //   ModalModule.forRoot([
    //     { name: 'test', component: TestComponent}
    //   ])
    ],
  declarations: [ AppComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
      //provideRoutes([ { path: 'test', component: TestComponent, outlet: 'modal'}])
  ],
  exports: [AppComponent]
})
export class AppModule {
}