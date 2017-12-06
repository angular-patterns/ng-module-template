import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModalModule } from '../modal/modal.module';
import { TestComponent } from './test/test.component';
import { provideRoutes } from '@angular/router';
//import { RouterModule, provideRoutes } from '@angular/router';

export var root =  ModalModule.forRoot([ { name:'test', component: TestComponent}]);

@NgModule({
  imports:      [ 
      BrowserModule,
      root
    //   ModalModule.forRoot([
    //     { name: 'test', component: TestComponent}
    //   ])
    ],
  declarations: [ AppComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
  ],
  exports: [AppComponent]
})
export class AppModule {
}