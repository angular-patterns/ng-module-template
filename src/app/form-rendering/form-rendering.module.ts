import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRenderingRoutingModule } from './form-rendering-routing.module';
import { SectionComponent } from './section/section.component';
import { FormComponent } from './form/form.component';


@NgModule({
  imports: [
    CommonModule,
    FormRenderingRoutingModule
  ],
  declarations: [
    SectionComponent,
    FormComponent
  ],
  exports: [
  ]
})
export class FormRenderingModule { }
