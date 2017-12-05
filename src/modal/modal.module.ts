import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalOutletComponent } from './modal-outlet.component';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test.component';
import { ModalService } from './modal.service';

var AppRouterModule = RouterModule.forRoot([
    { path: 'test', component: TestComponent, outlet: 'modal'}
]);

@NgModule({
  imports:      [ 
      BrowserModule, 
      AppRouterModule
    ],
  declarations: [ ModalOutletComponent, TestComponent ],
  providers: [ModalService],
  exports: [ModalOutletComponent, TestComponent]
})
export class ModalModule {
}
