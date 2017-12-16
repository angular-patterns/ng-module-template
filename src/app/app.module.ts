import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModalModule } from '../modal/modal.module';
import { provideRoutes, RouterModule } from '@angular/router';
import { RouterModalModule } from '../modal/router-modal.module';
import { ConfirmDialogComponent } from './confirm/confirm-dialog.component';
//import { RouterModule, provideRoutes } from '@angular/router';


@NgModule({
  imports:      [ 
      BrowserModule,
      ModalModule.forRoot([ { name: 'popup', component: ConfirmDialogComponent}])
    ],
  declarations: [ AppComponent, ConfirmDialogComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
  ],
  exports: [AppComponent]
})
export class AppModule {
}