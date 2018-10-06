import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { FormlyTemplatesRoutingModule  } from './formly-templates-routing.module';
import { RenderComponent } from './render/render.component';
import { FieldInputComponent } from './components/field-input/field-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyTemplatesRoutingModule,
    FormlyModule.forRoot({
      types: [
        { name: 'field-input', component: FieldInputComponent },
      ],
    })
  ],
  declarations: [
    RenderComponent,
    FieldInputComponent
  ]
})
export class FormlyTemplatesModule { }
