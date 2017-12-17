import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModalModule } from '../modal/modal.module';
import { provideRoutes, RouterModule } from '@angular/router';
import { RouterModalModule } from '../modal/router-modal.module';
import { ConfirmDialogComponent } from './confirm/confirm-dialog.component';
//import { RouterModule, provideRoutes } from '@angular/router';
import {  ReactiveFormsModule} from '@angular/forms';
import { InputComponent } from './input/input.component';


@NgModule({
  imports:      [ 
      BrowserModule,
      ModalModule.forRoot([ { name: 'popup', component: ConfirmDialogComponent}]),
      ReactiveFormsModule
    ],
  declarations: [ AppComponent, ConfirmDialogComponent, InputComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
  ],
  exports: [AppComponent]
})
export class AppModule {
}