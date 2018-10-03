import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { FieldInputComponent } from './components/field-input/field-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forChild({
      types: [
        { name: 'field-input', component: FieldInputComponent },
      ],
    }),
  ],
  exports: [
    ReactiveFormsModule
  ],
  declarations: [
    FieldInputComponent
  ]
})
export class FormlyCommonModule { }
