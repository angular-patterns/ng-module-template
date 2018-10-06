import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRenderingRoutingModule } from './form-rendering-routing.module';
import { FormRenderingComponent } from './form-rendering.component';


@NgModule({
  imports: [
    CommonModule,
    FormRenderingRoutingModule
  ],
  declarations: [
    FormRenderingComponent
  ],
  exports: [
  ]
})
export class FormRenderingModule { }
