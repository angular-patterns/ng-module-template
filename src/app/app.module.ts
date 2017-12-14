import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModalModule, RouterModalModule } from 'modal';
import { TestComponent } from './test/test.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [ 
{ path: 'test', component: TestComponent, outlet: 'modal'}
];

@NgModule({
  imports:      [ 
      BrowserModule,
      ModalModule.forRoot([{ name: 'test', component: TestComponent }]),
      //RouterModule.forRoot([])
    ],
  declarations: [ AppComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  entryComponents: [TestComponent]
})
export class AppModule {
}
