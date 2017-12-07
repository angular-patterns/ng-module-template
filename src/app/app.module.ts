import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModalModule } from '../modal/modal.module';
import { TestComponent } from './test/test.component';
// import { provideModals } from '../modal/services/provideModals';
import { provideRoutes } from '@angular/router';


@NgModule({
  imports:      [ BrowserModule, 
    //ModalModule.forRoot([{ name: 'test', component: TestComponent}] )
    ModalModule
  ],
  declarations: [ AppComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  providers: [],
  exports: [AppComponent]
})
export class AppModule {
}
