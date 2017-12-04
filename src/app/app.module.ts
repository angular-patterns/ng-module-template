import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModalModule } from 'ng-modal-dialog';
import { TestComponent } from './test/test.component';

@NgModule({
  imports:      [ 
      BrowserModule,
      ModalModule.forRoot([
          { name: 'test', component: TestComponent }
      ])
    ],
  declarations: [ AppComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
